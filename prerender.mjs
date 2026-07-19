import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrOutDir = resolve(__dirname, 'dist-ssr');
const ssrEntry = resolve(__dirname, 'src/entry-server.jsx');
const indexHtmlPath = resolve(distDir, 'index.html');
const ssrBundlePath = resolve(ssrOutDir, 'entry-server.js');

async function prerender() {
  console.log('\n🔨 [prerender] Building SSR bundle...');

  // 1. Build SSR bundle (Node.js target, no CSS injection)
  await build({
    build: {
      ssr: ssrEntry,
      outDir: ssrOutDir,
      rollupOptions: {
        output: {
          format: 'esm',
          entryFileNames: 'entry-server.js',
        },
      },
    },
    // Replace framer-motion with SSR-safe stubs during server build
    resolve: {
      alias: {
        'framer-motion': resolve(__dirname, 'src/motion-ssr-mock.jsx'),
      },
    },
    plugins: [],
    ssr: {
      noExternal: [],
    },
  });

  console.log('✅ [prerender] SSR bundle built');

  // 2. Import and run render()
  console.log('🚀 [prerender] Rendering app to HTML string...');
  const ssrBundleUrl = pathToFileURL(ssrBundlePath).href;
  const { render } = await import(ssrBundleUrl);
  const appHtml = render();

  console.log(`✅ [prerender] Generated ${appHtml.length.toLocaleString()} bytes of HTML`);

  // 3. Read dist/index.html and inject rendered HTML
  const template = readFileSync(indexHtmlPath, 'utf-8');
  const output = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  if (output === template) {
    console.warn('⚠️  [prerender] Could not find <div id="root"></div> placeholder in index.html — prerender skipped.');
    console.warn('    Check that index.html contains exactly: <div id="root"></div>');
  } else {
    writeFileSync(indexHtmlPath, output);
    console.log('✅ [prerender] Injected server-rendered HTML into dist/index.html');
  }

  // 4. Clean up temporary SSR bundle
  if (existsSync(ssrOutDir)) {
    rmSync(ssrOutDir, { recursive: true, force: true });
    console.log('🧹 [prerender] Cleaned up temporary SSR bundle');
  }

  console.log('\n✨ [prerender] Static prerender complete!\n');
}

prerender().catch((err) => {
  console.error('❌ [prerender] Error during prerender:', err);
  process.exit(1);
});
