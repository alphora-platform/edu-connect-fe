import { User } from 'lucide-react'

export default function HeaderForm() {
  return (
    <div className='flex flex-col items-center text-center mb-8'>
      <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary'>
        <User size={30}/>
      </div>
      <h1 className='text-[#111418] text-2xl md:text-3xl font-bold leading-tight'>Welcome Back</h1>
      <p className='text-[#617289] text-base font-normal leading-normal mt-2'>
        Please enter your details to sign in.
      </p>
    </div>
  )
}
