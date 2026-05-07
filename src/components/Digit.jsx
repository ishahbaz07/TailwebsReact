function Digit() {
  return (
    <section className="relative mt-8 md:mt-16  py-16 md:py-20 bg-[#0E165D] overflow-visible">
      {/* Image — desktop only */}
      <div className="absolute right-0 md:right-24 lg:right-36 -mt-32 md:-mt-40 h-full w-1/2 hidden lg:block">
        <img
          src="/assets/DIGIT-Image-Only.png"
          alt="Girl using mobile"
          className="h-[113%] w-full object-contain object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-4">
        <div className="w-full lg:max-w-lg relative z-10 lg:ml-16">
          <img
            src="/assets/digit-n.png"
            alt="DIGIT by eGov Foundation"
            className="h-12 md:h-20 w-auto mb-5 md:mb-6"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white mb-5 md:mb-6 !leading-snug">
            Our open source
            <strong className="font-bold tracking-wide text-3xl sm:text-4xl md:text-5xl block">
              technology-for-good platform
            </strong>
          </h2>

          <p className="text-gray-300 text-sm md:text-base  mb-10">
            DIGIT, short for Digital Infrastructure for Governance, Inclusion
            and Transformation is eGov's open-source platform with reusable
            building blocks and shared data registries that can be used to build
            solutions in multiple sectors.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-3 mt-2 bg-white text-black font-medium rounded-full hover:bg-[#7d8be9] hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore the platform
          </a>
        </div>
      </div>
    </section>
  );
}

export default Digit;
