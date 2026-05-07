import { supporters } from "../data/products";

function Supporters() {
  return (
    <section className="py-32 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl tracking-wide text-[#0E165D] text-start mb-16 md:mb-20">
          <span className="font-extralight mr-2 md:text-4xl">Our</span>
          <span className="font-bold">Supporters</span>
        </h2>

        {/* Logos */}

        <div className="flex flex-wrap justify-between items-center gap-y-10 gap-x-6 md:gap-x-8">
          {supporters.map((supporter, index) => (
            <div
              key={index}
              className="flex-1 flex justify-center items-center min-w-[120px] max-w-[200px]"
            >
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="h-12 md:h-20 lg:h-22 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Supporters;
