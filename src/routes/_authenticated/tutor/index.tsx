import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/tutor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Tutor routes!</div>
}
