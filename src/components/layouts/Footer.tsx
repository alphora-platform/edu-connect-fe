import { Facebook, GraduationCap, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200 pt-16 pb-8 px-4 md:px-10 lg:px-40'>
      <div className='max-w-[1100px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12'>
          <div className='lg:col-span-2 flex flex-col gap-4'>
            <div className='flex items-center gap-2 text-primary mb-2'>
              <div className='size-7 flex items-center justify-center bg-primary/10 rounded text-primary'>
                <GraduationCap />
              </div>
              <h2 className='text-[#111418] text-xl font-bold'>EduConnect</h2>
            </div>
            <p className='text-gray-500 text-sm leading-relaxed max-w-[300px]'>
              Connecting students with the perfect tutors for a personalized learning experience.
              Master any subject, anytime, anywhere.
            </p>
            <div className='flex gap-4 mt-2'>
              <div className='size-10 rounded-full bg-gray-500/30 flex items-center justify-center'>
                <Facebook color='gray' />
              </div>
              <div className='size-10 rounded-full bg-gray-500/30 flex items-center justify-center'>
                <Linkedin color='gray' />
              </div>
              <div className='size-10 rounded-full bg-gray-500/30 flex items-center justify-center'>
                <Instagram color='gray' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-[#111418]'>Company</h3>
            <div className='flex flex-col gap-2'>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                About Us
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Careers
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Press
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Blog
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-[#111418]'>Support</h3>
            <div className='flex flex-col gap-2'>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Help Center
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Safety Center
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Community Guidelines
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Contact Us
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-[#111418]'>Discover</h3>
            <div className='flex flex-col gap-2'>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                New Subjects
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Top Tutors
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Online classNamees
              </a>
              <a className='text-gray-500 hover:text-primary text-sm' href='#'>
                Group Lessons
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm'>© 2023 EduConnect Inc. All rights reserved.</p>
          <div className='flex gap-6'>
            <a className='text-gray-400 hover:text-gray-600 text-sm' href='#'>
              Privacy
            </a>
            <a className='text-gray-400 hover:text-gray-600 text-sm' href='#'>
              Terms
            </a>
            <a className='text-gray-400 hover:text-gray-600 text-sm' href='#'>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
