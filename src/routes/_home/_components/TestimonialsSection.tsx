import { Heart } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <div className='bg-white py-20 px-4 md:px-10 lg:px-40'>
      <div className='max-w-[800px] mx-auto text-center'>
        <div className='inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-bold mb-4'>
          <Heart fill='red' size={20} />
          Student Stories
        </div>
        <h2 className='text-[#111418] text-3xl md:text-4xl font-bold mb-10'>
          What our community says
        </h2>
        <div className='bg-background-light p-8 rounded-2xl relative'>
          <div className='absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white size-12 rounded-full flex items-center justify-center text-3xl font-serif'>
            {`"`}
          </div>
          <p className='text-lg md:text-xl text-gray-700 font-medium italic mt-4 mb-6 leading-relaxed'>
            {`"I was struggling with Calculus for months. I found a tutor on EduConnect within
            minutes, and after just 3 sessions, I aced my midterm! The platform is so easy to use."`}
          </p>
          <div className='flex flex-col items-center gap-2'>
            <img
              alt='Student Avatar'
              className='size-14 rounded-full object-cover'
              data-alt='Portrait of a female student'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuCRE24xGKXsq7EfB3lLetQO1hlIe1-rWQvsVKjNTNEFY36UlztCgHWEUXEImTIHx-6acqE_GXSaQ1HgT95UR72fnovpLGNigWw2bnrWSq8QCDCoNvfdlgjfw3yacvCH2q-ZNaEy-rfLRqdOK3MZotofVI6c9Q9eA-u_OkJpk70fS4c3kqsWcUA87-2lN0kZqzVlnl7NkKFZlg0toiVJ0O6N1hDmUyPpNAJcdkf-RPqFcNXvGb-JTpGK5Thwi0guAthNY4m81VO1qiI'
            />
            <div>
              <p className='font-bold text-[#111418]'>Jessica K.</p>
              <p className='text-sm text-gray-500'>University Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
