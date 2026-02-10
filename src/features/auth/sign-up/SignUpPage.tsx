import Devider from './components/Divider'
import RegisterFooter from './components/RegisterFooter'
import RegisterForm from './components/RegisterForm'
import RegisterHeader from './components/RegisterHeader'
import RegisterWithSocial from './components/RegisterWithSocial'

export default function SignUpPage() {
  return (
    <div className='bg-linear-to-br from-primary] to-[#0D9488] text-text-main  font-display min-h-screen flex flex-col overflow-x-hidden'>
      <main className='flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-[640px] flex flex-col gap-6'>
          <div className='bg-white  rounded-xl shadow-sm border border-[#f0f3f4]  p-6 sm:p-10'>
            <RegisterHeader />
            <RegisterForm />
            <Devider />
            <RegisterWithSocial />
            <RegisterFooter />
          </div>
        </div>
      </main>
    </div>
  )
}
