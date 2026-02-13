import { Search } from 'lucide-react'

export default function TutorSearchBar() {
  return (
    <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
      <div className='flex-1'>
        <h1 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6'>
          Find Your Perfect Tutor
        </h1>

        {/* search bar */}
        <div className='relative max-w-2xl'>
          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
            <Search className='text-primary'/>
          </div>
          <input
            className='block w-full pl-12 pr-4 py-3.5 bg-white  border border-slate-200 dark:border-slate-700 rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-base shadow-sm transition-shadow'
            placeholder="Search by subject, name, or keyword (e.g. 'Math Tutor')"
            type='text'
          />
          <button className='absolute inset-y-2 right-2 px-6 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors flex items-center'>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
