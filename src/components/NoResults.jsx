function NoResults({ searchTerm, activeCategory }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-9 h-9 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-[#0E165D] mb-2">
        No results found
      </h3>
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        {searchTerm
          ? `No content matched "${searchTerm}". Try a different keyword.`
          : `Nothing in the "${activeCategory}" category yet.`}
      </p>
    </div>
  );
}

export default NoResults;
