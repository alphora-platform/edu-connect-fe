import { MapPin, Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className='relative w-full bg-linear-to-br from-primary to-[#0D9488] py-20 px-4 lg:px-40 flex flex-col items-center justify-center gap-12 overflow-hidden'>
      {/* <!-- Abstract Background shapes --> */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20'>
        <div className='absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white blur-3xl'></div>
        <div className='absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-teal-300 blur-3xl'></div>
      </div>
      <div className='relative z-10 flex flex-col gap-6 text-center max-w-[800px] items-center'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm'>
          Find Your Perfect Tutor Today
        </h1>
        <h2 className='text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]'>
          Master any subject with expert tutors from top universities. Personalized learning for
          every goal.
        </h2>
        {/* <!-- Search Bar Component --> */}
        <div className='w-full max-w-[800px] bg-white p-2 rounded-xl shadow-xl flex flex-col md:flex-row gap-2 mt-4'>
          <div className='flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-3 py-2 gap-2'>
            <Search color='gray'/>
            <input
              className='w-full border-none focus:ring-0 text-[#111418] placeholder:text-gray-400 font-medium'
              placeholder='Subject (e.g., Math, Piano)'
              type='text'
            />
          </div>
          <div className='flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-3 py-2 gap-2'>
            <MapPin color='gray'/>
            <input
              className='w-full border-none focus:ring-0 text-[#111418] placeholder:text-gray-400 font-medium'
              placeholder='Online or Zip Code'
              type='text'
            />
          </div>
          <button className='bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer'>
            <span>Search</span>
          </button>
        </div>
      </div>
      {/* <!-- Stats Section --> */}
      <div className='relative z-10 flex flex-wrap gap-6 justify-center w-full max-w-[960px] mt-4'>
        <div className='flex min-w-[150px] flex-col items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/20 shadow-lg text-white'>
          <p className='text-3xl font-bold leading-tight'>10k+</p>
          <p className='text-white/80 text-sm font-medium'>Active Tutors</p>
        </div>
        <div className='flex min-w-[150px] flex-col items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/20 shadow-lg text-white'>
          <p className='text-3xl font-bold leading-tight'>50k+</p>
          <p className='text-white/80 text-sm font-medium'>Happy Students</p>
        </div>
        <div className='flex min-w-[150px] flex-col items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/20 shadow-lg text-white'>
          <p className='text-3xl font-bold leading-tight'>4.8/5</p>
          <p className='text-white/80 text-sm font-medium'>Average Rating</p>
        </div>
      </div>
    </div>
  )
}
