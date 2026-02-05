import { Link } from "@tanstack/react-router"

export default function FooterForm() {
  return (
    <div className='mt-8 text-center'>
      <p className='text-[#617289] text-base'>
        {`Don't have an account?`}
        <Link to="/sign-up" className='text-primary font-bold hover:underline ml-2' >
          Sign up
        </Link>
      </p>
    </div>
  )
}
