import { TimerReset } from 'lucide-react'

export default function HeaderForm() {
  return (
    <div className='text-center'>
      <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50  text-primary mb-5'>
        <TimerReset size={35} />
      </div>
      <h2 className='text-2xl font-bold text-[#111418]  mb-3'>Forgot Password?</h2>
      <p className='text-slate-500 dark:text-slate-400 text-base leading-relaxed px-4'>
        Enter the email associated with your account and we’ll send you a link to reset your
        password.
      </p>
    </div>
  )
}
