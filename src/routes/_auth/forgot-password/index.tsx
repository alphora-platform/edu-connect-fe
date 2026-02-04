import { createFileRoute } from '@tanstack/react-router'
import ForgotPassWordForm from './_components/_forgot-password-form'
import VerifyEmailForReset from './_components/_verifyEmailForReset'
import {useForgotPasswordState} from '../../../lib/stores/forgotPassword.store'

export const Route = createFileRoute('/_auth/forgot-password/')({
  component: RouteComponent,
})

function RouteComponent() {
  const  isSendingResetEmail = useForgotPasswordState((state)=> state.isSendingResetEmail)

  return (
    <div className='bg-background-light min-h-screen flex items-center'>
      <main className='grow flex flex-col  p-4 md:p-8 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-50via-background-light to-background-light    relative w-full overflow-hidden'>
        {/*<!-- Background decorative blobs -->  */}
        <div className={`${!isSendingResetEmail ? 'block' : 'hidden'}`}>
          <ForgotPassWordForm />
        </div>

        <div className={`${isSendingResetEmail ? 'block' : 'hidden'}`}>
          <VerifyEmailForReset />
        </div>
      </main>
    </div>
  )
}
