import SideBarFooter from './SideBarFooter'
import SideBarHeader from './SideBarHeader'
import TutorFilters from './TutorFilters'

export default function TutorSideBar() {
  return (
    <aside className='w-full lg:col-span-1 '>
      <div className='sticky top-24 bg-sidebar-bg dark:bg-surface-dark rounded-xl shadow-soft border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-screen'>
        <SideBarHeader />
        <TutorFilters />
        <SideBarFooter />
      </div>
    </aside>
  )
}
