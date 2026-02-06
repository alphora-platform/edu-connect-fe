import { useForgotPasswordState } from '@/features/auth/forgot-password/forgotPassword.store'
import { MailCheck } from 'lucide-react'

export default function VerificationHeader() {
  const email = useForgotPasswordState((state) => state.email)
  return (
    <div className='text-center flex flex-col items-center'>
      {/* <!-- Success Illustration --> */}
      <div className='size-20 mb-6 relative flex items-center justify-center'>
        <div className='absolute inset-0 bg-green-50  rounded-full scale-100 transition-transform'></div>
        <div className='relative flex items-center justify-center text-green-600 '>
          <MailCheck size={34} />
        </div>
      </div>
      <h2 className='text-2xl font-bold text-[#111418]  mb-3'>Check your email</h2>
      <p className='text-slate-500  text-base leading-relaxed'>
        We sent a password reset link to <br />
        <strong className='text-[#111418]  font-medium'>{email}</strong>
      </p>
    </div>
  )
}
