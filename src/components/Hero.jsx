import hero from "../assets/New-Home-Page-Banner-Image.png";
function Hero() {
  return (
    <div className="relative bg-white min-h-[700px] flex items-start overflow-hidden mb-0">
      {/* Background Image*/}
      <div className="absolute top-[-65px] right-0 w-[76%] hidden md:block">
        <img
          src={hero}
          alt="Citizens using digital services"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 lg:py-20 pt-16 pb-10">
        <div className="max-w-md">
          <h1 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[43px] font-light text-[#0E165D] tracking-wider !leading-[1.2] mb-1.5">
            20 years of digital transformation in public service delivery
          </h1>

          <p className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-slate-800 mb-6">
            <span className="relative inline-block isolate">
              It's possible.
              <svg
                className="absolute -bottom-1 left-0 w-full h-[110%]"
                style={{ zIndex: -1 }}
                viewBox="0 0 300 50"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2,18 C30,8 70,28 110,14 C150,2 180,22 220,12 C255,4 275,20 298,10 L298,38 C270,30 240,42 200,36 C160,28 120,44 80,36 C45,28 18,40 2,36 Z"
                  fill="#A8EEF5"
                  opacity="0.85"
                />
              </svg>
            </span>
          </p>

          <p className="text-[15px] text-gray-600 leading-6 mb-10 max-w-[350px]">
            Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're
            driven by the power of open digital infrastructure and ecosystems to
            enable governments deliver accessible, inclusive and transparent
            services to every citizen.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-5 py-2.5 bg-[#4BB5C3] text-white font-semibold text-[15px] rounded-full hover:bg-cyan-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-800 transition-all "
            >
              Our Approach
            </a>
            <a
              href="#"
              className="px-5 py-2.5 border-2 border-slate-400 text-slate-800 font-semibold text-[15px] rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Our Impact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
