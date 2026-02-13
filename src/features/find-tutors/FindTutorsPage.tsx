import Breadcrumb from './components/Breadcrumb'
import TutorMainContent from './components/main-content/TutorMainContent'
import TutorSideBar from './components/sidebar'
import TutorSearchBar from './components/TutorSearchBar'

export default function FindTuTorsPage() {
  return (
    <div className='bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display antialiased '>
      <div className='bg-linear-to-br from-primary] to-[#0D9488] min-h-screen'>
        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <header className='mb-8'>
            <Breadcrumb />
            <TutorSearchBar />
          </header>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            <TutorSideBar />
            <TutorMainContent />
          </div>
        </main>
      </div>
    </div>
  )
}
