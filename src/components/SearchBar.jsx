import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/productsSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((s) => s.products.searchTerm);

  return (
    <div className="relative max-w-lg mb-6 md:mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        placeholder="Search by name, author or tag..."
        className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm text-[#0E165D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B5CA] focus:border-transparent transition-all"
      />

      {/* Search Icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Clear Button  */}
      {searchTerm && (
        <button
          onClick={() => dispatch(setSearchTerm(""))}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
