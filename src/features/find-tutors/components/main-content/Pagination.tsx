import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination() {
  return (
    <div className='mt-12 flex justify-center'>
      <nav className='flex items-center gap-2'>
        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors'>
          <ChevronLeft />
        </button>
        <button className='w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30'>
          1
        </button>
        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium'>
          2
        </button>
        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium'>
          3
        </button>
        <span className='px-2 text-slate-400'>...</span>
        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium'>
          12
        </button>
        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors'>
          <ChevronRight />
        </button>
      </nav>
    </div>
  )
}
