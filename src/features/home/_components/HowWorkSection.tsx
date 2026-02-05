import { CalendarDays, GraduationCap, Search, UserRoundSearch } from 'lucide-react'

export default function HowWorkSection() {
  return (
    <div className='bg-background-light py-16 px-4 md:px-10 lg:px-40 scroll-mt-24' id='how-it-work'>
      <div className='max-w-[1100px] mx-auto flex flex-col gap-12'>
        <div className='text-center'>
          <h2 className='text-[#111418] text-3xl md:text-4xl font-bold'>How It Works</h2>
          <p className='text-gray-500 text-lg mt-2'>
            Start your learning journey in 4 simple steps
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 relative'>
          {/* <!-- Connecting Line (Desktop) --> */}
          <div className='hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0'></div>
          {/* <!-- Steps --> */}
          <div className='relative z-10 flex flex-col items-center text-center gap-4'>
            <div className='size-14 rounded-full bg-white border-4 border-primary shadow-sm flex items-center justify-center text-primary'>
              <Search size={28} />
            </div>
            <div>
              <h3 className='font-bold text-lg mb-1'>Search Tutors</h3>
              <p className='text-sm text-gray-500'>Filter by subject, price, and location.</p>
            </div>
          </div>
          {/* <!-- Step 2 --> */}
          <div className='relative z-10 flex flex-col items-center text-center gap-4'>
            <div className='size-14 rounded-full bg-white border-4 border-primary shadow-sm flex items-center justify-center text-primary'>
              <UserRoundSearch size={28} />
            </div>
            <div>
              <h3 className='font-bold text-lg mb-1'>Compare Profiles</h3>
              <p className='text-sm text-gray-500'>Read reviews and check qualifications.</p>
            </div>
          </div>
          {/* <!-- Step 3 --> */}
          <div className='relative z-10 flex flex-col items-center text-center gap-4'>
            <div className='size-14 rounded-full bg-white border-4 border-primary shadow-sm flex items-center justify-center text-primary'>
              <CalendarDays size={28} />
            </div>
            <div>
              <h3 className='font-bold text-lg mb-1'>Book a Session</h3>
              <p className='text-sm text-gray-500'>Choose a time that works for you.</p>
            </div>
          </div>
          {/* <!-- Step 4 --> */}
          <div className='relative z-10 flex flex-col items-center text-center gap-4'>
            <div className='size-14 rounded-full bg-white border-4 border-primary shadow-sm flex items-center justify-center text-primary'>
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className='font-bold text-lg mb-1'>Start Learning</h3>
              <p className='text-sm text-gray-500'>Connect via video or meet in person.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
