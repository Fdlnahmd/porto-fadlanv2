import React from 'react';

const stubs = {};

export const motion = new Proxy({}, {
  get(target, prop) {
    if (typeof prop !== 'string') return undefined;
    
    // Check if the property is a lowercase HTML tag (e.g. div, span, nav)
    if (prop === 'custom') {
      return (Component) => Component;
    }
    
    if (!stubs[prop]) {
      stubs[prop] = function MotionStub({ children, className, style, onClick, ...props }) {
        const cleanProps = { className, style, onClick };
        return React.createElement(prop, cleanProps, children);
      };
    }
    return stubs[prop];
  }
});

export function AnimatePresence({ children }) {
  return <>{children}</>;
}
