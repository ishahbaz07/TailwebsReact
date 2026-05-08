import { useState } from "react";
import { boldApproaches } from "../data/products";

function BoldApproaches() {
  const [activeCategory, setActiveCategory] = useState("Public Health");
  const currentApproach =
    boldApproaches.find((a) => a.category === activeCategory) ||
    boldApproaches[0];

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-center">
            {/* Left Side */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-[38px] font-extralight tracking-wide leading-tight text-[#131B4D] mb-8 md:mb-12">
                Big problems need
                <br />
                <span className="font-bold block tracking-wide text-4xl md:text-5xl">
                  bold approaches
                </span>
              </h2>

              <div className="flex flex-row flex-wrap lg:flex-col gap-3 max-w-full lg:max-w-[340px]">
                {boldApproaches.map((approach) => (
                  <button
                    key={approach.id}
                    onClick={() => setActiveCategory(approach.category)}
                    className={`px-5 md:px-8 py-2.5 md:py-3 text-center rounded-full font-semibold text-sm md:text-[16px] border transition-all
                      ${
                        activeCategory === approach.category
                          ? "bg-[#1D70B8] text-white border-[#1D70B8]"
                          : "bg-transparent text-[#131B4D] border-[#131B4D] hover:bg-slate-100"
                      }`}
                  >
                    {approach.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="w-full lg:w-8/12">
              <div className="flex flex-col sm:flex-row gap-3">
                {currentApproach.cards.map((card, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-3xl p-6 md:p-8 pt-8 md:pt-10 relative overflow-hidden min-h-[320px] md:min-h-[450px] flex flex-col items-start
                      ${card.color === "cyan" ? "bg-[#4DBAC1]" : "bg-[#1D94FF]"}`}
                  >
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
                      {card.number}
                    </h3>
                    <p className="text-[#0E165D] text-sm md:text-[16px] mb-6 md:mb-4 leading-snug max-w-[180px]">
                      {card.text}
                    </p>
                    <a
                      href="#"
                      className="inline-block px-5 md:px-7 py-2 md:py-3 bg-white text-[#131B4D] text-sm font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                      Read More
                    </a>
                    {card.image && (
                      <img
                        src={card.image}
                        alt="illustration"
                        className="absolute bottom-0 right-0 w-full h-2/4 object-fill translate-y-4"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoldApproaches;
