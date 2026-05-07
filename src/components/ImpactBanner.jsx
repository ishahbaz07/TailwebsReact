function ImpactBanner() {
  return (
    <section
      className="relative min-h-[600px] md:h-screen md:min-h-[800px] mt-0  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/Map-Hover-1.png')" }}
    >
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Top Content */}
      <div className="absolute top-8 md:top-12 left-0 right-0 z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl font-light tracking-wide text-white">
            1,000,000,100+
          </h2>
          <p className="text-sm md:text-base font-normal text-left md:text-left max-w-xs md:max-w-sm leading-relaxed text-white">
            Citizens availing public services through eGov's Digital Public
            Goods (DPG)
          </p>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-16 md:bottom-44 left-0 right-0 z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-56 items-center sm:items-start justify-center sm:justify-start pl-0 md:pl-32">
          <div className="text-center">
            <h3 className="text-2xl md:text-5xl font-light mb-2 text-white">
              1.1 Billion+
            </h3>
            <p className="text-xs md:text-sm font-normal text-white">
              Public services delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-5xl font-light mb-2 text-white">
              50+ partners
            </h3>
            <p className="text-xs md:text-sm font-normal text-white leading-relaxed">
              From technology,
              <br /> governments and NGOs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactBanner;
