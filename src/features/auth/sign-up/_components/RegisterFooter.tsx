import { Link } from '@tanstack/react-router'

export default function RegisterFooter() {
  return (
    <div className='text-center mt-6 text-base text-text-muted '>
      Already have an account?
      <Link to='/sign-in' className='text-primary hover:text-primary-dark font-bold ml-1' >
        Log in
      </Link>
    </div>
  )
}
