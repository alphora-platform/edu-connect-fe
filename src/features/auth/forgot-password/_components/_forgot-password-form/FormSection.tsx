import { useForgotPasswordState } from '@/features/auth/forgot-password/forgotPassword.store'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function FormSection() {
  const sendEmailResetPassword = useForgotPasswordState((state) => state.sendEmailResetPassword)
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    sendEmailResetPassword(email)
  }
  return (
    <form className='w-full flex flex-col gap-6 mt-2' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <label className='text-lg font-medium text-[#111418] ' htmlFor='email'>
          Email address
        </label>
        <div className='relative group/input'>
          <input
            className='w-full h-12 pl-11 pr-4 rounded-lg border border-teal/20  bg-white text-[#111418] text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 transition-all outline-none'
            id='email'
            placeholder='name@example.com'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors pointer-events-none flex items-center'>
            <Mail />
          </div>
        </div>
      </div>
      <button
        className='w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-white cursor-pointer'
        type='submit'
      >
        <span>Send Reset Link</span>
      </button>
    </form>
  )
}
