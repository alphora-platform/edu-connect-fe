export default function Breadcrumb() {
  return (
    <nav aria-label='Breadcrumb' className='flex text-sm text-slate-500 dark:text-slate-400 mb-4'>
      <ol className='flex items-center space-x-2'>
        <li>
          <a className='hover:text-primary transition-colors' href='#'>
            Home
          </a>
        </li>
        <li>
          <span className='material-icons-round text-base mx-1 text-slate-400'>chevron_right</span>
        </li>
        <li aria-current='page' className='text-slate-800 dark:text-white font-medium'>
          Find Tutors
        </li>
      </ol>
    </nav>
  )
}
