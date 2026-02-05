export default function RegisterHeader() {
  return (
    <>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-text-main  tracking-tight mb-2'>
          Join EduConnect
        </h1>
        <p className='text-text-muted 0 text-base'>
          Create your account to start your journey.
        </p>
      </div>

      {/* <!-- Role Toggle --> */}
      <div className='mb-8'>
        <div className='flex h-12 w-full items-center justify-center rounded-lg bg-[#f0f3f4]  p-1.5'>
          <label className='flex-1 cursor-pointer h-full relative group'>
            <input className='peer sr-only' name='role' type='radio' value='student' />
            <div className='flex h-full w-full items-center justify-center rounded-md transition-all duration-200 text-text-muted peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm font-medium text-sm'>
              {`I'm a Student`}
            </div>
          </label>
          <label className='flex-1 cursor-pointer h-full relative group'>
            <input checked className='peer sr-only' name='role' type='radio' value='tutor' />
            <div className='flex h-full w-full items-center justify-center rounded-md transition-all duration-200 text-text-muted peer-checked:bg-white  peer-checked:text-primary peer-checked:shadow-sm font-medium text-sm'>
              {`I'm a Tutor`}
            </div>
          </label>
        </div>
      </div>
    </>
  )
}
