import { X, EyeOff, Eye } from 'lucide-react'

export default function RegisterForm() {
  return (
    <form className='flex flex-col gap-5'>
      {/* <!-- Basic Info --> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {/* fullname */}
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Full Name</span>
          <input
            className='h-12 w-full rounded-lg border border-teal/20 bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none   '
            placeholder='Jane Doe'
            type='text'
          />
        </label>
        {/* number */}
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Phone Number</span>
          <input
            className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none '
            placeholder='+1 (555) 000-0000'
            type='tel'
          />
        </label>
      </div>
      <label className='flex flex-col gap-1.5'>
        <span className='text-sm font-medium text-text-main '>Email Address</span>
        <input
          className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'
          placeholder='name@example.com'
          type='email'
        />
      </label>
      {/* <!-- Tutor Specific: Subjects --> */}
      <label className='flex flex-col gap-1.5'>
        <span className='text-sm font-medium text-text-main '>Subjects</span>
        <div className='min-h-12 w-full rounded-lg border border-teal/20  bg-white  px-2 py-1.5 flex flex-wrap items-center gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors'>
          <span className='inline-flex items-center gap-1 rounded bg-teal/10 text-teal px-2 py-1 text-sm font-medium'>
            Mathematics
            <button className='hover:text-teal-700' type='button'>
              <X  size={15}/>
            </button>
          </span>
          <span className='inline-flex items-center gap-1 rounded bg-teal/10 text-teal px-2 py-1 text-sm font-medium'>
            Physics
            <button className='hover:text-teal-700' type='button'>
              <X     size={15}/>
            </button>
          </span>
          <input
            className='bg-transparent border-none outline-none text-base text-text-main  placeholder:text-text-muted flex-1 min-w-[120px] h-8 focus:ring-0'
            placeholder='Add a subject...'
            type='text'
          />
        </div>
      </label>
      {/* <!-- Tutor Specific: Experience --> */}
      <label className='flex flex-col gap-1.5'>
        <span className='text-sm font-medium text-text-main '>Experience</span>
        <textarea
          className='w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none'
          placeholder='Tell us about your teaching experience...'
          rows={3}
        ></textarea>
      </label>
      {/* <!-- Password Section --> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Password</span>
          <div className='relative'>
            <input
              className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'
              type='password'
              value='pass123'
            />
            <button
              className='absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main'
              type='button'
            >
              <EyeOff />
              <Eye className='hidden'/>
            </button>
          </div>
          {/* <!-- Strength Meter --> */}
          <div className='flex gap-1.5 mt-1'>
            <div className='h-1 flex-1 rounded-full bg-teal'></div>
            <div className='h-1 flex-1 rounded-full bg-teal'></div>
            <div className='h-1 flex-1 rounded-full bg-[#e2e8f0] '></div>
            <div className='h-1 flex-1 rounded-full bg-[#e2e8f0] '></div>
          </div>
          <span className='text-xs text-teal font-medium mt-0.5'>Medium strength</span>
        </label>
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Confirm Password</span>
          <input
            className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'
            type='password'
          />
        </label>
      </div>
      {/* <!-- Submit Button --> */}
      <button
        className='mt-2 h-12 w-full rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-sm transition-all active:scale-[0.99]'
        type='button'
      >
        Create Account
      </button>
    </form>
  )
}
