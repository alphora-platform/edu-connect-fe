import { BadgeCheck, Star } from 'lucide-react'

export default function TutorItem() {
  return (
    <div className='group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col'>
      <div className='p-5 flex-grow'>
        <div className='flex items-start justify-between mb-4'>
          <div className='relative'>
            <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-surface-dark shadow-sm'>
              <img
                alt='Female tutor portrait'
                className='w-full h-full object-cover'
                data-alt='Smiling female tutor profile picture'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuB1fr6fDN4BeC1z6YkLsjfTfLe9IWD1rY3GVYQH4zkSYcSTI0F7QLS0e1iwOQgWlqCHY_b7dcFxXxrckC3LYJ3ZJu-oFHVONKotOXsB2yb47mCEaqJ0u6R45jUMT8pZkybXQcZK7aWuwAgm_atDWm3Tda30OULy-94U7mZ5HWmG3SCGjKSQquPtGKA8jqbf174ACDgWwYgdDsVQF2NK1ORo22nu3KfF-57pOW7VGhHWJFqfJYrsa079fHMzdXgObFDtbsnlJLgUEcE'
              />
            </div>
            <div
              className='absolute bottom-0 right-0 w-4 h-4 bg-teal-accent border-2 border-white dark:border-surface-dark rounded-full'
              title='Online'
            ></div>
          </div>
          <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-100 dark:border-teal-800'>
            <BadgeCheck /> Verified
          </span>
        </div>
        <div className='mb-4'>
          <h3 className='font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
            Sarah Jenkins
          </h3>
          <p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>
            Math Expert | 5 Years Experience
          </p>
          <div className='flex items-center gap-1 text-xs text-slate-400 mb-3'>
            <span className='material-icons-round text-sm text-slate-400'>location_on</span>
            <span>Ho Chi Minh City</span>
          </div>
          <div className='flex items-center gap-1 text-amber-400 font-bold text-sm'>
            <Star fill='orange' color='orange' />
            <span>4.9</span>
            <span className='text-slate-400 font-normal ml-1'>(128 reviews)</span>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 mb-4'>
          <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
            Math
          </span>
          <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
            Algebra
          </span>
          <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
            Calculus
          </span>
        </div>
      </div>
      <div className='p-4 bg-slate-50/80 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-xs text-slate-500 uppercase font-semibold'>Hourly Rate</span>
          <span className='text-lg font-bold text-primary'>
            500.000đ
            <span className='text-sm font-normal text-slate-500 dark:text-slate-400'>/hr</span>
          </span>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <button className='px-4 py-2 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors'>
            View Profile
          </button>
          <button className='px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium text-sm shadow-md shadow-primary/20 transition-all'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
