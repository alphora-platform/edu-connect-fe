import SignInPage from '@/features/auth/sign-in/SignInPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: SignInComponent })

function SignInComponent() {
  return (
    <>
      <SignInPage />
    </>
  )
}
