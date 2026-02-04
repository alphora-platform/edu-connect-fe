import FooterForm from '../FooterForm'
import FormSection from './FormSection'
import HeaderForm from './HeaderForm'

export default function ForgotPassWordForm() {
  return (
    <div className='w-full flex flex-col items-center'>
    <div className=' bg-white  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100  w-full max-w-[480px] overflow-hidden flex flex-col h-full'>
      <div className='p-8 sm:p-10 flex flex-col gap-6 flex-grow'>
        <HeaderForm />
      <FormSection />
      <FooterForm />
      </div>
      <div className='h-1.5 w-full bg-gradient-to-r from-blue-50 via-primary/50 to-blue-50 '></div>
    </div>
    </div>
  )
}
