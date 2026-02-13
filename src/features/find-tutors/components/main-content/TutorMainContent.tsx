import Pagination from './Pagination'
import ResultFilter from './ResultFilter'

export default function TutorMainContent() {
  return (
    <div className='col-span-3 flex flex-col'>
      {/* display info filter */}
      <ResultFilter />
      {/* list tutors */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '>
        <div className='group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col'>
          <div className='p-5 flex-grow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-surface-dark shadow-sm'>
                  <img
                    alt='Male tutor portrait'
                    className='w-full h-full object-cover'
                    data-alt='Professional male tutor headshot'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuB1qR-MrqPXv4oBhRGeSOiuuuAxzIvJaYgGcEyN4Z2aJ905V9SYR7PzCwO1TsDYiV0UrCBpPopz8wpdfk1bumepKd89TAONGGi0tmGpd5Am1FRghFyDzR7NiJtBMwNdanrjA48QvUZjxfJhfRA_vAOhDxkAbvpaKqhO7L6kCwWM1qj9EsultKUxGpXFM_HaZuP5szCe16uTNNt7oxXlt9usrPCnT-7Q-MO1Kbots5TzhG0RNhWm7U8kewhsTZPMOGwyh1Ku0Hv5Z6w'
                  />
                </div>
                <div
                  className='absolute bottom-0 right-0 w-4 h-4 bg-slate-300 border-2 border-white dark:border-surface-dark rounded-full'
                  title='Offline'
                ></div>
              </div>
              <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-100 dark:border-teal-800'>
                <span className='material-icons-round text-sm'>verified</span> Verified
              </span>
            </div>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
                Nguyen Minh Tuan
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>
                IELTS Prep Specialist | 8.5 Band
              </p>
              <div className='flex items-center gap-1 text-xs text-slate-400 mb-3'>
                <span className='material-icons-round text-sm text-slate-400'>location_on</span>
                <span>Hanoi</span>
              </div>
              <div className='flex items-center gap-1 text-amber-400 font-bold text-sm'>
                <span className='material-icons-round text-base'>star</span>
                <span>5.0</span>
                <span className='text-slate-400 font-normal ml-1'>(84 reviews)</span>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                English
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                IELTS
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                TOEIC
              </span>
            </div>
          </div>
          <div className='p-4 bg-slate-50/80 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xs text-slate-500 uppercase font-semibold'>Hourly Rate</span>
              <span className='text-lg font-bold text-primary'>
                650.000đ
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
        <div className='group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col'>
          <div className='p-5 flex-grow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-surface-dark shadow-sm'>
                  <img
                    alt='Female tutor portrait glasses'
                    className='w-full h-full object-cover'
                    data-alt='Confident female tutor with glasses'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuDNF7jfQDdGxGitL9heJ6OMKiWR8L13BuryHG44EYBCTjpPCiZUtH7zBT9TEMFvAjnPR087dIXB-yvb_Evt6ha0NHF635lDnP69S7OIdTB2gKwBtJMFNLQ14KSlTWO92oG2qmEl99PsFs2DHUX4W69OKoG1RZm5fK0lKP-oNeA84-Uhq8fg0f_cvSxIkt0pbYTN8PT8mwUHKCRHJHSqSbEudDzB8AtXDk7GWX5SnP6CmxJ_kEFs3knd4KyfEq1aKCkA4pp1-CJAF7k'
                  />
                </div>
                <div
                  className='absolute bottom-0 right-0 w-4 h-4 bg-teal-accent border-2 border-white dark:border-surface-dark rounded-full'
                  title='Online'
                ></div>
              </div>
            </div>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
                Emily Tran
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>
                High School Physics &amp; Math
              </p>
              <div className='flex items-center gap-1 text-xs text-slate-400 mb-3'>
                <span className='material-icons-round text-sm text-slate-400'>location_on</span>
                <span>Da Nang</span>
              </div>
              <div className='flex items-center gap-1 text-amber-400 font-bold text-sm'>
                <span className='material-icons-round text-base'>star</span>
                <span>4.7</span>
                <span className='text-slate-400 font-normal ml-1'>(42 reviews)</span>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Physics
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Science
              </span>
            </div>
          </div>
          <div className='p-4 bg-slate-50/80 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xs text-slate-500 uppercase font-semibold'>Hourly Rate</span>
              <span className='text-lg font-bold text-primary'>
                400.000đ
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
        <div className='group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col'>
          <div className='p-5 flex-grow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-surface-dark shadow-sm'>
                  <img
                    alt='Young female tutor portrait'
                    className='w-full h-full object-cover'
                    data-alt='Friendly young female tutor portrait'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuCC_DLX-z03GYrQSJ78_LtAVi93qvYtf04IPlzzduVAtJAnVjq__rpjPSuc5O6XyRYGnq_825slZ4iYPrRNs6UUAPix0yehhxKQWBVM7onV2XUTdUclT71pFz9zOfh2UV8aLK3Wt-waHpM5NGZg--VE2gsqr6hb0L5ekR2QobEdNxQWqS0luj12PhwF4VP6YVfE2ZttIcgLuGa6xVn3q-drt-qn__mL-UOUzGnDRwcCdZuFWkCmSXxHgLLK6LGrlV4ZKCUTJzI0tM8'
                  />
                </div>
                <div
                  className='absolute bottom-0 right-0 w-4 h-4 bg-teal-accent border-2 border-white dark:border-surface-dark rounded-full'
                  title='Online'
                ></div>
              </div>
              <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-100 dark:border-teal-800'>
                <span className='material-icons-round text-sm'>verified</span> Verified
              </span>
            </div>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
                Linh Dan
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>
                Literature &amp; Creative Writing
              </p>
              <div className='flex items-center gap-1 text-xs text-slate-400 mb-3'>
                <span className='material-icons-round text-sm text-slate-400'>location_on</span>
                <span>Online Only</span>
              </div>
              <div className='flex items-center gap-1 text-amber-400 font-bold text-sm'>
                <span className='material-icons-round text-base'>star</span>
                <span>5.0</span>
                <span className='text-slate-400 font-normal ml-1'>(15 reviews)</span>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Literature
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Writing
              </span>
            </div>
          </div>
          <div className='p-4 bg-slate-50/80 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xs text-slate-500 uppercase font-semibold'>Hourly Rate</span>
              <span className='text-lg font-bold text-primary'>
                350.000đ
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
        <div className='group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col'>
          <div className='p-5 flex-grow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-surface-dark shadow-sm'>
                  <img
                    alt='Male tutor portrait 2'
                    className='w-full h-full object-cover'
                    data-alt='Energetic male tutor profile picture'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuByOeVkJaWECbF-iVmHMk9AbkpRV0hnWwcMgeA8WEfUM1KaawvjEqJNc81LDPQS_tPbi2rp73YhwLs6PX7dzsOGgJ69iJbNbYXCEp676rQce_5MyGhUotQmZNFZVnh4PT7GZwvd7C-lTyMtcN9Oa2VnkpriGsBQp8LT2MBtmNHcwVydCs_ujzlGdTh5l2UI09Bvr83MT0YpPCwZ6LKKyiFr1_0aGwqkKSCQ8F5_OkPMfi5636cperL8IF3bQnoJtsxn3WfB8oO-uIA'
                  />
                </div>
                <div
                  className='absolute bottom-0 right-0 w-4 h-4 bg-slate-300 border-2 border-white dark:border-surface-dark rounded-full'
                  title='Offline'
                ></div>
              </div>
              <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-100 dark:border-teal-800'>
                <span className='material-icons-round text-sm'>verified</span> Verified
              </span>
            </div>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
                David Chen
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>
                Computer Science &amp; Coding
              </p>
              <div className='flex items-center gap-1 text-xs text-slate-400 mb-3'>
                <span className='material-icons-round text-sm text-slate-400'>location_on</span>
                <span>Ho Chi Minh City</span>
              </div>
              <div className='flex items-center gap-1 text-amber-400 font-bold text-sm'>
                <span className='material-icons-round text-base'>star</span>
                <span>4.8</span>
                <span className='text-slate-400 font-normal ml-1'>(56 reviews)</span>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Programming
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Python
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Java
              </span>
            </div>
          </div>
          <div className='p-4 bg-slate-50/80 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xs text-slate-500 uppercase font-semibold'>Hourly Rate</span>
              <span className='text-lg font-bold text-primary'>
                600.000đ
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
        <div className='group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col'>
          <div className='p-5 flex-grow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-surface-dark shadow-sm'>
                  <img
                    alt='Female tutor portrait 3'
                    className='w-full h-full object-cover'
                    data-alt='Warm and approachable female tutor portrait'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuD3MAw7uQ2D92MyAW9v4SHCnm8uStQvcr3Md_vShmin1tAAZqY6L4ZJqFkxuuYWqwQybtxXvoS4gE1_L7VKNhap_PBBj7IhjB_L64wnk_XgpiC62tOFHldnsxz8uBmME1m_akVDTzK2pDdriuUp0wyjJK5cyXJ1ybj-zDKvJxPMn7JWISY1Wox7kjXWIffvQKohSy6_n1nL-X4zd1OWm1D6ymhc7NNP6YDs0XMkC_2UIuflDP9WYSWTynCW61kTNd8ng_JIT5MR__k'
                  />
                </div>
                <div
                  className='absolute bottom-0 right-0 w-4 h-4 bg-teal-accent border-2 border-white dark:border-surface-dark rounded-full'
                  title='Online'
                ></div>
              </div>
              <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-100 dark:border-teal-800'>
                <span className='material-icons-round text-sm'>verified</span> Verified
              </span>
            </div>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
                Maria Garcia
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400 mb-2'>
                Spanish Native Speaker
              </p>
              <div className='flex items-center gap-1 text-xs text-slate-400 mb-3'>
                <span className='material-icons-round text-sm text-slate-400'>location_on</span>
                <span>Hanoi</span>
              </div>
              <div className='flex items-center gap-1 text-amber-400 font-bold text-sm'>
                <span className='material-icons-round text-base'>star</span>
                <span>4.6</span>
                <span className='text-slate-400 font-normal ml-1'>(29 reviews)</span>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Spanish
              </span>
              <span className='px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium'>
                Language
              </span>
            </div>
          </div>
          <div className='p-4 bg-slate-50/80 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xs text-slate-500 uppercase font-semibold'>Hourly Rate</span>
              <span className='text-lg font-bold text-primary'>
                450.000đ
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
      </div>

      {/* pagination */}
      <Pagination />
    </div>
  )
}
