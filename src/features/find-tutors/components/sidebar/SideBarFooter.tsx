export default function SideBarFooter() {
  return (
    <div className='p-4 bg-slate-50 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3'>
          <div className='flex justify-between items-center text-base'>
            <span className='text-black'>3 filters applied</span>
            <button className='text-primary hover:text-primary-hover hover:underline transition-colors font-medium'>
              Clear All
            </button>
          </div>
        </div>
  )
}