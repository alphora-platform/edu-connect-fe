import {  LockKeyhole, Mail } from 'lucide-react'
import GoogleLogo from '../../../../../public/google-icon.webp'
import { Link } from "@tanstack/react-router"

export default function LoginForm() {
  return (
    <form action='#' className='flex flex-col gap-5' method='POST'>
      {/* <!-- Email Field --> */}
      <div className='flex flex-col gap-2'>
        <label className='text-[#111418] text-base font-medium leading-normal'>Email</label>
        <div className='flex w-full items-stretch rounded-lg border border-[#dbe0e6] bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden h-12'>
          <input
            className='flex w-full min-w-0 flex-1 resize-none border-none bg-transparent text-[#111418] focus:outline-0 focus:ring-0 placeholder:text-[#9aa2ac] px-4 text-base font-normal leading-normal'
            placeholder='Enter your email'
            type='email'
          />
          <div className='text-[#9aa2ac] flex items-center justify-center px-2'>
            <Mail />
          </div>
        </div>
      </div>
      {/* <!-- Password Field --> */}
      <div className='flex flex-col gap-2'>
        <label className='text-[#111418] text-base font-medium leading-normal'>Password</label>
        <div className='flex w-full items-stretch rounded-lg border border-[#dbe0e6] bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden h-12'>
          <input
            className='flex w-full min-w-0 flex-1 resize-none border-none bg-transparent text-[#111418] focus:outline-0 focus:ring-0 placeholder:text-[#9aa2ac] px-4 text-base font-normal leading-normal'
            placeholder='Enter your password'
            type='password'
          />
          <div className='text-[#9aa2ac] flex items-center justify-center px-2 cursor-pointer hover:text-[#111418]'>
            <LockKeyhole />
          </div>
        </div>
      </div>
      {/* <!-- Remember Me & Forgot Password --> */}
      <div className='flex flex-wrap items-center justify-between gap-2 mt-1'>
        <label className='flex items-center gap-x-2 cursor-pointer group'>
          <input
            className='h-4 w-4 rounded border-[#dbe0e6] text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer'
            type='checkbox'
          />
          <p className='text-[#617289] text-base font-normal leading-normal group-hover:text-[#111418] transition-colors'>
            Remember me
          </p>
        </label>
        <Link
          to='/forgot-password'
          className='text-primary text-base font-medium leading-normal hover:underline'
        
        >
          Forgot password?
        </Link>
      </div>
      {/* <!-- Submit Button --> */}
      <button className='flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-all shadow-md mt-2'>
        Log In
      </button>
      {/* <!-- Divider --> */}
      <div className='relative py-2 flex items-center gap-2'>
        <div className='h-px flex-1 bg-[#dbe0e6]'></div>
        <span className='text-[#9aa2ac] text-xs font-medium uppercase'>Or</span>
        <div className='h-px flex-1 bg-[#dbe0e6]'></div>
      </div>
      {/* <!-- Google Button --> */}
      <button
        className='flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-4 bg-white border border-[#dbe0e6] text-[#111418] text-base font-medium leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors'
        type='button'
      >
        <img src={GoogleLogo} alt='google-icon' className='size-6' />
        <span>Sign in with Google</span>
      </button>
    </form>
  )
}
