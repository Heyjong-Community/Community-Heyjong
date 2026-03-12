export default function ArticleCardSkeleton() {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm'>
      {/* image */}
      <div className='w-full h-[220px] bg-gray-200 animate-pulse'></div>

      <div className='p-4 space-y-3'>
        {/* title */}
        <div className='h-6 bg-gray-200 rounded animate-pulse'></div>

        {/* content */}
        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse'></div>
        </div>

        {/* author */}
        <div className='flex items-center gap-3 pt-2'>
          <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
          <div className='h-4 w-24 bg-gray-200 rounded animate-pulse'></div>
        </div>
      </div>
    </div>
  );
}
