export default function VerifyEmail() {
  return (
    <div className='flex flex-col gap-4 mt-2'>
      <button
        className='w-full h-12 bg-white border border-slate-200  hover:bg-slate-50  text-[#111418]  font-bold rounded-lg transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-slate-200 cursor-pointer'
        type='button'
      >
        <span>Open email app</span>
      </button>
      <div className='flex flex-wrap items-center justify-center gap-1.5 py-2'>
        <p className='text-sm text-slate-500 '>{`Didn't receive the email?`}</p>
        <button className='text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors cursor-pointer'>
          Click to resend
        </button>
      </div>
      <div className='text-center'>
        <span className='text-xs font-mono font-medium text-slate-500 bg-slate-100  px-3 py-1.5 rounded-full'>
          00:59
        </span>
      </div>
    </div>
  )
}
