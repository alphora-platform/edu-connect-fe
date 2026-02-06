import FooterForm from '../FooterForm'
import VerificationHeader from './VerificationHeader'
import VerifyEmail from './VerifyEmail'

export default function VerifyEmailForReset() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className=' bg-white  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100  w-full max-w-[480px] overflow-hidden flex flex-col h-full'>
        <div className='p-8 sm:p-10 flex flex-col gap-6 grow'>
          <VerificationHeader />
          <VerifyEmail />
          <FooterForm />
        </div>
        <div className='h-1.5 w-full bg-linear-to-r from-green-50 via-green-500/30 to-green-50  '></div>
      </div>
    </div>
  )
}
