import { CalendarCheck2, LockKeyhole, ShieldCheck } from 'lucide-react'

export default function FeatureSection() {
  return (
    <div className='bg-white py-16 px-4 md:px-10 lg:px-40'>
      <div className='max-w-[1100px] mx-auto flex flex-col gap-10'>
        <div className='flex flex-col gap-2 text-center'>
          <h2 className='text-[#111418] text-3xl md:text-4xl font-bold'>Why Choose EduConnect?</h2>
          <p className='text-gray-500 text-lg'>
            We make learning easy, safe, and effective for everyone.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* <!-- Feature 1 --> */}
          <div className='group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:shadow-lg hover:border-primary/20'>
            <div className='size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
              <ShieldCheck size={28} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#111418] text-lg font-bold'>Verified Tutors</h3>
              <p className='text-[#617189] leading-relaxed'>
                Every tutor undergoes a rigorous background check and qualification verification
                process.
              </p>
            </div>
          </div>
          {/* <!-- Feature 2 --> */}
          <div className='group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:shadow-lg hover:border-primary/20'>
            <div className='size-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors'>
              <CalendarCheck2 size={28}/>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#111418] text-lg font-bold'>Flexible Scheduling</h3>
              <p className='text-[#617189] leading-relaxed'>
                Book sessions that fit your busy lifestyle. Reschedule easily when life happens.
              </p>
            </div>
          </div>
          {/* <!-- Feature 3 --> */}
          <div className='group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:shadow-lg hover:border-primary/20'>
            <div className='size-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors'>
              <LockKeyhole size={28} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#111418] text-lg font-bold'>Secure Payments</h3>
              <p className='text-[#617189] leading-relaxed'>
                Your money is held in escrow and only released when the lesson is successfully
                completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
