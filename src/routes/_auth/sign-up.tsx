import SignUpPage from '@/features/auth/sign-up/SignUpPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-up')({
  component: SignUp,
})

function SignUp() {
  return (
    <>
      <SignUpPage />
    </>
  )
}
