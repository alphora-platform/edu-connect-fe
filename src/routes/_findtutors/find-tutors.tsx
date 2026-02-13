import FindTuTorsPage from '@/features/find-tutors/FindTutorsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_findtutors/find-tutors')({
  component: FindTutors,
})

function FindTutors() {
  return <FindTuTorsPage />
}
