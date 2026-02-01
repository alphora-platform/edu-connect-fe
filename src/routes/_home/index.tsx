import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
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
    <div className='bg-background-light dark:bg-background-dark text-[#111418] font-display antialiased overflow-x-hidden'>
      <Header />
      <HeroSection />
      <FeatureSection />
      <HowWorkSection />
      <SubjectsSection />
      <TutorsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
