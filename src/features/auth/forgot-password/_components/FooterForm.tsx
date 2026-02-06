import { ArrowLeftToLine} from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function FooterForm() {
  return (
    <>
      <div className='text-center mt-auto pt-4'>
        <Link
          to='/sign-in'
          className='inline-flex items-center justify-center gap-2 text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-primary  transition-colors group'
        >
          <ArrowLeftToLine />
          Back to log in
        </Link>
      </div>
    </>
  )
}
