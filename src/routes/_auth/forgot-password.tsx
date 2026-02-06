import ForgotPasswordPage from '@/features/auth/forgot-password/ForgotPasswordPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/forgot-password')({
  component: ForgotPassword,
})

function ForgotPassword() {
  return (
    <>
      <ForgotPasswordPage />
    </>
  )
}
