import { ArrowRight, Calculator, Code, FlaskConical, Globe, Languages, Piano } from 'lucide-react'

export default function SubjectsSection() {
  return (
    <div className='bg-white py-16 px-4 md:px-10 lg:px-40'>
      <div className='max-w-[1100px] mx-auto flex flex-col gap-10'>
        <div className='flex justify-between items-end'>
          <div>
            <h2 className='text-[#111418] text-3xl font-bold'>Popular Subjects</h2>
            <p className='text-gray-500 mt-1'>Explore our most requested topics</p>
          </div>
          <a
            className='hidden md:flex items-center text-primary font-bold hover:underline gap-2'
            href='#'
          >
            View all subjects <ArrowRight size={20}/>
          </a>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {/* <!-- Subject Card 1 --> */}
          <a
            className='group flex flex-col gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center items-center'
            href='#'
          >
            <div className='size-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <Calculator size={25} />
            </div>
            <div>
              <p className='font-bold text-[#111418]'>Mathematics</p>
              <p className='text-xs text-gray-500 mt-1'>1,200+ Tutors</p>
            </div>
          </a>
          {/* <!-- Subject Card 2 --> */}
          <a
            className='group flex flex-col gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center items-center'
            href='#'
          >
            <div className='size-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center'>
              <FlaskConical size={25} />
            </div>
            <div>
              <p className='font-bold text-[#111418]'>Science</p>
              <p className='text-xs text-gray-500 mt-1'>850+ Tutors</p>
            </div>
          </a>
          {/* <!-- Subject Card 3 --> */}
          <a
            className='group flex flex-col gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center items-center'
            href='#'
          >
            <div className='size-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center'>
              <Globe size={25} />
            </div>
            <div>
              <p className='font-bold text-[#111418]'>English</p>
              <p className='text-xs text-gray-500 mt-1'>2,100+ Tutors</p>
            </div>
          </a>
          {/* <!-- Subject Card 4 --> */}
          <a
            className='group flex flex-col gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center items-center'
            href='#'
          >
            <div className='size-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center'>
              <Code size={25} />
            </div>
            <div>
              <p className='font-bold text-[#111418]'>Coding</p>
              <p className='text-xs text-gray-500 mt-1'>600+ Tutors</p>
            </div>
          </a>
          {/* <!-- Subject Card 5 --> */}
          <a
            className='group flex flex-col gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center items-center'
            href='#'
          >
            <div className='size-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center'>
              <Piano size={25} />
            </div>
            <div>
              <p className='font-bold text-[#111418]'>Music</p>
              <p className='text-xs text-gray-500 mt-1'>450+ Tutors</p>
            </div>
          </a>
          {/* <!-- Subject Card 6 --> */}
          <a
            className='group flex flex-col gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center items-center'
            href='#'
          >
            <div className='size-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center'>
              <Languages size={25} />
            </div>
            <div>
              <p className='font-bold text-[#111418]'>Language</p>
              <p className='text-xs text-gray-500 mt-1'>900+ Tutors</p>
            </div>
          </a>
        </div>
        <a
          className='md:hidden flex justify-center items-center text-primary font-bold hover:underline gap-1 mt-4'
          href='#'
        >
          View all subjects <span className='material-symbols-outlined text-sm'>arrow_forward</span>
        </a>
      </div>
    </div>
  )
}
