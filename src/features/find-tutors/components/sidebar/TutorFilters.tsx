import {
  BookOpenText,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Languages,
  Laptop,
  Merge,
  Receipt,
  Search,
  Speech,
  Star,
  Video,
} from 'lucide-react'

export default function TutorFilters() {
  return (
    <div className='overflow-y-auto custom-scrollbar  flex-1'>
      {/* filter subjects */}
      <div className='border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <BookOpenText />
            Subject
          </div>
          <ChevronDown className='cursor-pointer' />
        </summary>
        <div className='px-4 pb-4'>
          <div className='relative mb-3'>
            <span className='absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none '>
              <Search size={20} />
            </span>
            <input
              className='w-full pl-8 pr-3 py-2 text-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary bg-slate-50 dark:bg-slate-800'
              placeholder='Search subjects...'
              type='text'
            />
          </div>
          <div className='flex flex-wrap gap-2'>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-primary hover:text-primary peer-checked:hover:text-white'>
                Math
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-primary hover:text-primary peer-checked:hover:text-white'>
                English
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-primary hover:text-primary peer-checked:hover:text-white'>
                Physics
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-primary hover:text-primary peer-checked:hover:text-white'>
                Chemistry
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-primary hover:text-primary peer-checked:hover:text-white'>
                History
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* filter price */}
      <div className='border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <Receipt />
            Price Range (VND)
          </div>
          <ChevronDown />
        </summary>
        <div className='px-4 pb-4'>
          <div className='mt-4 mb-6 relative'>
            <div className='range-slider'>
              <div className='range-selected'></div>
            </div>
            <div className='range-input'>
              <input max='1000000' min='0' step='50000' type='range' value='200000' />
              <input max='1000000' min='0' step='50000' type='range' value='700000' />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='relative w-full'>
              <span className='absolute left-2 top-1/2 -translate-y-1/2 text-sm text-slate-400'>
                ₫
              </span>
              <input
                className='w-full pl-5 pr-1 py-1.5 text-sm border border-slate-200 dark:border-slate-600 rounded bg-slate-50 dark:bg-slate-800 focus:ring-1 focus:ring-primary focus:border-primary'
                type='number'
                value='200000'
              />
            </div>
            <span className='text-slate-400'>-</span>
            <div className='relative w-full'>
              <span className='absolute left-2 top-1/2 -translate-y-1/2 text-sm text-slate-400'>
                ₫
              </span>
              <input
                className='w-full pl-5 pr-1 py-1.5 text-sm border border-slate-200 dark:border-slate-600 rounded bg-slate-50 dark:bg-slate-800 focus:ring-1 focus:ring-primary focus:border-primary'
                type='number'
                value='700000'
              />
            </div>
          </div>
        </div>
      </div>
      {/* fiter rating */}
      <div className='border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <Star />
            Rating
          </div>
          <ChevronDown />
        </summary>
        <div className='px-4 pb-4 space-y-2'>
          <label className='flex items-center justify-between cursor-pointer group/item hover:bg-slate-50 dark:hover:bg-slate-800 p-1 -mx-1 rounded'>
            <div className='flex items-center gap-3'>
              <input
                className='text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent h-4 w-4'
                name='rating'
                type='radio'
              />

              <span className='text-base text-slate-600 dark:text-slate-400'>5.0</span>
              <Star fill='orange' color='yelow' />
            </div>
            <span className='text-base text-slate-400'>(124)</span>
          </label>
          <label className='flex items-center justify-between cursor-pointer group/item hover:bg-slate-50 dark:hover:bg-slate-800 p-1 -mx-1 rounded'>
            <div className='flex items-center gap-3'>
              <input
                className='text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent h-4 w-4'
                name='rating'
                type='radio'
              />

              <span className='text-base text-slate-600 dark:text-slate-400'>4.0 &amp; up</span>
              <Star fill='orange' color='yelow' />
            </div>
            <span className='text-base text-slate-400'>(450)</span>
          </label>
          <label className='flex items-center justify-between cursor-pointer group/item hover:bg-slate-50 dark:hover:bg-slate-800 p-1 -mx-1 rounded'>
            <div className='flex items-center gap-3'>
              <input
                className='text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent h-4 w-4'
                name='rating'
                type='radio'
              />

              <span className='text-base text-slate-600 dark:text-slate-400'>3.0 &amp; up</span>
              <Star fill='orange' color='yelow' />
            </div>
            <span className='text-base text-slate-400'>(89)</span>
          </label>
        </div>
      </div>
      {/* filter calendar */}
      <div className='border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <CalendarDays />
            Availability
          </div>
          <ChevronDown />
        </summary>
        <div className='px-4 pb-4'>
          <div className='grid grid-cols-4 gap-2 mb-4'>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Mon
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Tue
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Wed
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Thu
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Fri
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Sat
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='flex items-center justify-center w-full h-8 text-sm font-medium rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all'>
                Sun
              </span>
            </label>
          </div>
          <div className='flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1'>
            <button className='flex-1 py-1.5 text-sm font-medium text-slate-400 rounded hover:text-primary'>
              Morning
            </button>
            <button className='flex-1 py-1.5 text-sm font-medium bg-white dark:bg-surface-dark shadow-sm text-slate-400 hover:border-primary hover:text-primary rounded  border-slate-200 dark:border-slate-600'>
              Afternoon
            </button>
            <button className='flex-1 py-1.5 text-sm font-medium text-slate-400 rounded hover:text-primary'>
              Evening
            </button>
          </div>
        </div>
      </div>
      {/* filter session */}
      <div className='border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <Video />
            Session Type
          </div>
          <ChevronDown />
        </summary>
        <div className='px-4 pb-4 space-y-2'>
          <label className='flex items-center gap-3 p-2 rounded-lg border border-primary bg-primary/5 cursor-pointer'>
            <input
              className='text-primary focus:ring-primary h-4 w-4'
              name='session_type'
              type='radio'
            />
            <Laptop />
            <span className='text-sm font-medium text-slate-700 dark:text-slate-200'>Online</span>
          </label>
          <label className='flex items-center gap-3 p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 cursor-pointer'>
            <input
              className='text-primary focus:ring-primary h-4 w-4'
              name='session_type'
              type='radio'
            />
            <Speech />
            <span className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              In-person
            </span>
          </label>
          <label className='flex items-center gap-3 p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 cursor-pointer'>
            <input
              className='text-primary focus:ring-primary h-4 w-4'
              name='session_type'
              type='radio'
            />
            <Merge />
            <span className='text-sm font-medium text-slate-600 dark:text-slate-400'>Both</span>
          </label>
        </div>
      </div>
      {/* filter experience */}
      <div className='border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <BriefcaseBusiness />
            Experience
          </div>
          <ChevronDown />
        </summary>
        <div className='px-4 pb-4 space-y-2'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              className='rounded border-slate-300 text-primary focus:ring-primary custom-checkbox h-4 w-4'
              type='checkbox'
            />
            <span className='text-sm text-slate-600 dark:text-slate-400'>&lt; 1 Year</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              className='rounded border-slate-300 text-primary focus:ring-primary custom-checkbox h-4 w-4'
              type='checkbox'
            />
            <span className='text-sm text-slate-600 dark:text-slate-400'>1-3 Years</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              className='rounded border-slate-300 text-primary focus:ring-primary custom-checkbox h-4 w-4'
              type='checkbox'
            />
            <span className='text-sm text-slate-600 dark:text-slate-400'>3-5 Years</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              className='rounded border-slate-300 text-primary focus:ring-primary custom-checkbox h-4 w-4'
              type='checkbox'
            />
            <span className='text-sm text-slate-600 dark:text-slate-400'>5+ Years</span>
          </label>
        </div>
      </div>
      {/* filter langue */}
      <div className='bg-white dark:bg-surface-dark group'>
        <summary className='flex justify-between items-center p-4 cursor-pointer select-none list-none'>
          <div className='flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200'>
            <Languages />
            Languages
          </div>
          <ChevronDown />
        </summary>
        <div className='px-4 pb-4'>
          <div className='flex flex-wrap gap-2'>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-2.5 py-1 rounded text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary/30 transition-all hover:bg-slate-100'>
                English
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-2.5 py-1 rounded text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary/30 transition-all hover:bg-slate-100'>
                Vietnamese
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-2.5 py-1 rounded text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary/30 transition-all hover:bg-slate-100'>
                French
              </span>
            </label>
            <label className='cursor-pointer'>
              <input className='peer sr-only' type='checkbox' />
              <span className='px-2.5 py-1 rounded text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-600 dark:text-slate-400 peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary/30 transition-all hover:bg-slate-100'>
                Japanese
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
