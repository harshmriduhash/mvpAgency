export function PortfolioHero() {
  return (
    <div className="container mt-10 sm:mt-20 relative flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-background px-4 lg:px-40 pb-10 sm:pb-10 pt-8 md:pb-10">
      <div className="text-center">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-5xl sm:text-7xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Our portfolio
        </h1>
        <p className="text-lg mt-4 px-2 lg:px-40 text-muted-foreground font-light">
          Explore our past projects and discover inspiration for your own ideas.
        </p>
      </div>
    </div>
  );
};