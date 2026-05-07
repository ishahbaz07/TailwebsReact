import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory, setLoaded } from "../store/productsSlice";
import { categories } from "../data/products.js";

import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import SkeletonLoader from "./SkeletonLoader";
import NoResults from "./NoResults";

function LatestProducts() {
  const dispatch = useDispatch();
  const { items, activeCategory, searchTerm, isLoading } = useSelector(
    (s) => s.products,
  );

  // Trigger loading state on every filter or search change
  useEffect(() => {
    const timer = setTimeout(() => dispatch(setLoaded()), 700);
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm, dispatch]);

  const filtered = useMemo(() => {
    const term = searchTerm.toLowerCase();

    if (!searchTerm && activeCategory === "What's New") {
      return items.filter((p) => p.id === 1 || p.id === 2 || p.id === 3);
    }

    return items.filter((p) => {
      const matchSearch =
        !searchTerm ||
        p.title.toLowerCase().includes(term) ||
        p.author.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term));

      const matchCategory =
        activeCategory === "What's New" || p.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [items, searchTerm, activeCategory]);

  return (
    <section
      id="latest-section"
      className="mt-16 md:mt-20 py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extralight text-[#0E165D] mb-8 md:mb-10">
          Latest at{" "}
          <strong className="font-bold text-4xl md:text-5xl">eGov</strong>
        </h2>

        <SearchBar />

        {/* Category Filter  */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mb-8 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => dispatch(setActiveCategory(category))}
              className={`px-4 sm:px-6 py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#00B5CA] text-white border-[#00B5CA] shadow-md shadow-cyan-200"
                  : "bg-transparent text-[#0E165D] border-[#0E165D] hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Result Searching */}
        {!isLoading && searchTerm && filtered.length > 0 && (
          <p className="text-xs sm:text-sm text-gray-400 mb-5">
            Showing{" "}
            <span className="font-semibold text-[#0E165D]">
              {filtered.length}
            </span>{" "}
            result{filtered.length !== 1 ? "s" : ""} for{" "}
            <span className="font-semibold text-[#0E165D]">"{searchTerm}"</span>
          </p>
        )}

        {/* Skeleton / No Results */}
        {isLoading ? (
          <SkeletonLoader count={filtered.length || 3} />
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 md:mb-12  ">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <NoResults searchTerm={searchTerm} activeCategory={activeCategory} />
        )}

        <div className=" mt-4">
          <button className="bg-[#4BB5C3] hover:bg-cyan-800 text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
            See all
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
