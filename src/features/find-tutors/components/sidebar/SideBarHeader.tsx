import { SlidersHorizontal } from 'lucide-react'

export default function SideBarHeader() {
  return (
    <div className='p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-white '>
      <h2 className='font-bold text-lg text-slate-800  flex items-center gap-2'>
        <SlidersHorizontal /> Filters
      </h2>
      <span className='bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full'>
        3 Active
      </span>
    </div>
  )
}
