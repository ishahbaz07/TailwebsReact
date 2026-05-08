import thumb1 from "../assets/thumb-1.jpg";
import thumb2 from "../assets/thumb-2.png";

function About() {
  const thumbnails = [
    {
      image: thumb1,
      quote: "Leveraging technology for sustainable development",
    },
    {
      image: thumb2,
      quote: "Digitising civic services for better life",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-[#0E165D] tracking-wide mb-6 md:mb-6 !leading-snug">
            20 years of reimagining for citizens and{" "}
            <strong className="font-bold md:text-5xl">
              <span className="relative inline-block isolate">
                sustaining change
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
            </strong>
          </h2>

          <p className="text-sm md:text-base  text-gray-600 leading-7 mb-10 md:mb-14 max-w-2xl mx-auto">
            Technology is powerful, but is only one piece of the puzzle, when it
            comes to enhancing the quality of life for every citizen. To have
            sustainable impact at scale, the collective energy of local networks
            to solve local problems needs to be tapped into. Our partners &
            networks bring this collective energy to life. The ecosystem already
            exists; our task is to facilitate and amplify their efforts. For 20
            years, we've been turning small steps into lasting, meaningful
            change, so that no citizen is left behind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 justify-center max-w-2xl mx-auto">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer  "
              >
                <img
                  src={thumb.image}
                  alt={thumb.quote}
                  className="w-full h-48 md:h-48 object-fit group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  flex flex-col justify-end p-4 md:p-5">
                  <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform self-end">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-slate-800 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block px-5 py-3 mt-3 border border-[#0E165D] text-[#0E165D] font-medium rounded-full bg-transparent transition-all duration-300 hover:bg-[#131B4D] hover:text-white"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
