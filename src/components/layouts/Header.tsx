import { Link } from '@tanstack/react-router'
import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <>
      <header className='sticky-header flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-4 h-20 w-full '>
        <div className='flex items-center gap-3 text-primary'>
          <Link
            to='/'
            className='size-10 flex items-center justify-center bg-primary/60 rounded-lg p-1'
          >
            <img src='/public/favicon.ico' alt='' />
          </Link>
          <Link to="/" className='text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em]'>
            EduConnect
          </Link>
        </div>
        <div className='flex flex-1 justify-end gap-8 items-center'>
          <div className='hidden lg:flex items-center gap-8'>
            <Link to="/"
              className='text-[#111418] hover:text-primary transition-colors text-lg font-medium leading-normal'

            >
              Home
            </Link>
            <a
              className='text-[#111418] hover:text-primary transition-colors text-lg font-medium leading-normal'

            >
              Find Tutors
            </a>
            <a
              className='text-[#111418] hover:text-primary transition-colors text-lg font-medium leading-normal'
              href='#how-it-work'
            >
              How it Works
            </a>
            <a
              className='text-[#111418] hover:text-primary transition-colors text-lg font-medium leading-normal'

            >
              Pricing
            </a>
            <a
              className='text-[#111418] hover:text-primary transition-colors text-lg font-medium leading-normal'

            >
              Blog
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='hidden sm:flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent hover:bg-gray-100 text-[#111418] gap-2 text-lg font-bold leading-normal tracking-[0.015em]  px-2.5 transition-colors'>
              <Globe />
              <div className='hidden xl:block'>EN</div>
            </div>
            <Link to="/sign-in" className='flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 py-[18px] bg-transparent border border-[#dbdfe6] hover:bg-gray-50 text-[#111418] text-lg font-bold leading-normal tracking-[0.015em] transition-colors'>
              <span className='truncate'>Login</span>
            </Link>
            <Link to="/sign-up" className='flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 py-5 bg-primary hover:bg-blue-700 text-white text-lg font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm'>
              <span className='truncate'>Sign Up</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
