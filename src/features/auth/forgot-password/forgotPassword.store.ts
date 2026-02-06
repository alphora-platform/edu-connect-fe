import { create } from 'zustand'

type State = {
  isSendingResetEmail: boolean
  email: string
}
type Action = {
  sendEmailResetPassword: (email: string) => void
}

export const useForgotPasswordState = create<State & Action>((set) => ({
  isSendingResetEmail: false,
  email: '',

  sendEmailResetPassword: (email) => set({ email, isSendingResetEmail: true }),
}))
