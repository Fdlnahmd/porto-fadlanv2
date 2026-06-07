

const Aurora = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-dark-bg pointer-events-none">
      {/* Aurora Orb 1: Violet/Indigo Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-violet/15 opacity-55 blur-[120px] animate-aurora-1" />
      
      {/* Aurora Orb 2: Teal/Emerald Glow */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-teal/15 opacity-50 blur-[130px] animate-aurora-2" />

      {/* Aurora Orb 3: Subtle Center Purple Glow */}
      <div className="absolute top-[30%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-accent-indigo/10 opacity-30 blur-[120px] animate-aurora-1" style={{ animationDelay: '-10s' }} />

      {/* Subtle overlay grid effect */}
      <div className="absolute inset-0 aurora-grid bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default Aurora;
