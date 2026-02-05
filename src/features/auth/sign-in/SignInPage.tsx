import FooterForm from './components/FooterForm'
import HeaderForm from './components/HeaderForm'
import LoginForm from './components/LoginForm'

export default function SignInPage() {
  return (
    <div className='grow flex items-center justify-center px-4 py-12 relative overflow-hidden bg-linear-to-br from-primary] to-[#0D9488] '>
      <div className='w-full max-w-150 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-10 relative z-10 animate-fade-in-up '>
        <HeaderForm />
        <LoginForm />
        <FooterForm />
      </div>
    </div>
  )
}
