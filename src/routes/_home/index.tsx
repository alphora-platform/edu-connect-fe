import { createFileRoute } from '@tanstack/react-router'
import FeatureSection from './_components/FeatureSection'
import HeroSection from './_components/HeroSection'
import HowWorkSection from './_components/HowWorkSection'
import SubjectsSection from './_components/SubjectsSection'
import TestimonialsSection from './_components/TestimonialsSection'
import TutorsSection from './_components/TutorsSection'

export const Route = createFileRoute('/_home/')({
  component: App,
})

function App() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <HowWorkSection />
      <SubjectsSection />
      <TutorsSection />
      <TestimonialsSection />
    </div>
  )
}
