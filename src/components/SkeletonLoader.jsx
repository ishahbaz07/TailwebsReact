function SkeletonCard() {
  return (
    <div className="bg-[#F0F6F9] rounded-3xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-6 space-y-3">
        <div className="h-3 bg-gray-200 rounded-full w-1/4" />
        <div className="h-5 bg-gray-200 rounded-full w-5/6" />
        <div className="h-5 bg-gray-200 rounded-full w-4/6" />
        <div className="h-4 bg-gray-200 rounded-full w-2/6" />
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function SkeletonLoader({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default SkeletonLoader;
