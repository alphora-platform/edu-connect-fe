import { X } from 'lucide-react'

export default function ResultFilter() {
  return (
    <div className='flex flex-wrap gap-2 mb-6'>
      <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-black/20 text-primary border border-primary/20'>
        Subject: Math
        <button className='hover:bg-white/20 rounded-full p-0.5 cursor-pointer'>
          <X />
        </button>
      </span>
      <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-black/20 text-primary border border-primary/20'>
        Price: &lt; 500k
        <button className='hover:bg-primary/10 rounded-full p-0.5 cursor-pointer'>
          <X />
        </button>
      </span>
      <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-black/20 text-primary border border-primary/20'>
        Rating: 4.0+
        <button className='hover:bg-primary/10 rounded-full p-0.5 cursor-pointer'>
          <X />
        </button>
      </span>
      <button className='text-base text-red-600 hover:text-primary ml-2 underline '>
        Clear all
      </button>
    </div>
  )
}
