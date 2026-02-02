import { createFileRoute } from '@tanstack/react-router'
import Devider from './_components/Divider'
import RegisterForm from './_components/RegisterForm'
import RegisterHeader from './_components/RegisterHeader'
import RegisterWithSocial from './_components/RegisterWithSocial'
import RegisterFooter from './_components/RegisterFooter'

export const Route = createFileRoute('/_auth/sign-up/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-background-light  text-text-main  font-display min-h-screen flex flex-col overflow-x-hidden'>
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
