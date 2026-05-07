function ProductCard({ product }) {
  return (
    <div className="bg-[#F0F6F9] rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div className="h-56 sm:h-64 overflow-hidden bg-gray-200 flex-shrink-0 relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/400x250/e2e8f0/94a3b8?text=No+Image";
          }}
        />
        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0E165D] shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-[#0E165D] font-bold text-[15px] leading-snug mb-4 flex-1 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex flex-wrap items-center text-[#4A5568] text-xs font-medium mb-4 gap-x-3 gap-y-1">
          {product.author && (
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#00B5CA] rounded-full flex-shrink-0"></span>
              <span>{product.author}</span>
            </div>
          )}
          {product.date && (
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#00B5CA] rounded-full flex-shrink-0"></span>
              <span>{product.date}</span>
            </div>
          )}
        </div>

        <div className="mb-3">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full ${
              product.price === "Premium"
                ? "bg-orange-100 text-orange-600"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {product.price}
          </span>
        </div>

        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {product.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-white text-[#4A5568] text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm border border-gray-100"
              >
                {tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className="text-[11px] text-gray-400 self-center">
                +{product.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
