import { Check, ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TutorsSection() {
  return (
    <div className='bg-background-light py-16 px-4 md:px-10 lg:px-40 border-t border-gray-100'>
      <div className='max-w-[1100px] mx-auto flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
          <div>
            <h2 className='text-[#111418] text-3xl font-bold'>Top Rated Tutors</h2>
            <p className='text-gray-500 mt-1'>Learn from the best in the field</p>
          </div>
          <div className='flex gap-2'>
            <button className='bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 size-10 rounded-full flex items-center justify-center transition-colors'>
              <ChevronLeft />
            </button>
            <button className='bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 size-10 rounded-full flex items-center justify-center transition-colors'>
              <ChevronRight />
            </button>
            
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* <!-- Tutor Card 1 --> */}
          <div className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col '>
            <div
              className='h-24 bg-linear-to-r from-blue-500 to-teal-400 relative'
              data-alt='Blue gradient header background'
            ></div>
            <div className='px-5 pb-5 pt-0 flex flex-col flex-1'>
              <div className='relative -mt-10 mb-3'>
                <img
                  alt='Sarah J. Tutor Portrait'
                  className='size-20 rounded-full border-4 border-white object-cover shadow-sm'
                  data-alt='Portrait of a smiling woman'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuC7gMVLGUcrDNUpUajZ0QAVADwADJv8eFFi5qr8hUwHpr9hJqmssLyEMxmkVNXV4wLx7yMB6N3V6ck6zLqJqad0no38ehgjtEHhisk5p7VY3Fu7Fw4y8X3uMuFnAY4MZJrqsNIHGEZZj1aSSK522SMnE7VfFH5APV8KvZxawbIB6SyaAkdP-pKvWpcnRRegj1QwFAJcUxQ0UO8Uj5SSUjN8S9Z8hRv3KN2FIH_EWaS_qHtLs6FjhuSqdVN5yI7PNuKVQC4HL1yZ91U'
                />
                <div
                  className='absolute bottom-0 right-2 bg-green-500 p-0.5 rounded-full border-2 border-white'
                  title='Verified'
                >
                  <Check color='white' />
                </div>
              </div>
              <div className='flex justify-between items-start mb-2'>
                <div>
                  <h3 className='font-bold text-lg text-[#111418]'>Sarah J.</h3>
                  <p className='text-sm text-primary font-medium'>Mathematics Expert</p>
                </div>
                <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold'>
                  <Star size={20} />
                  <p>5.0</p>
                </div>
              </div>
              <p className='text-gray-500 text-sm line-clamp-2 mb-4 flex-1'>
                PhD student at MIT with 5 years of tutoring experience in Calculus and Algebra.
              </p>
              <div className='flex items-center justify-between pt-4 border-t border-gray-100 mt-auto'>
                <span className='font-bold text-lg text-[#111418]'>
                  $45<span className='text-sm text-gray-400 font-normal'>/hr</span>
                </span>
                <button className='cursor-pointer text-primary text-sm font-bold hover:bg-blue-50 px-3 py-1.5 rounded transition-colors'>
                  View Profile
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Tutor Card 2 --> */}
          <div className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col '>
            <div
              className='h-24 bg-linear-to-r from-purple-500 to-pink-400 relative'
              data-alt='Purple gradient header background'
            ></div>
            <div className='px-5 pb-5 pt-0 flex flex-col flex-1'>
              <div className='relative -mt-10 mb-3'>
                <img
                  alt='David M. Tutor Portrait'
                  className='size-20 rounded-full border-4 border-white object-cover shadow-sm'
                  data-alt='Portrait of a smiling man'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuCye6w-A-QEb6YJLF17TjevnHtQAO5Hb2ErQcdinN4nxqseViNeQ1lZO8U6zPnTmJT9rlLVZGP4M1DqkycUJ8OhF5nwFgMqwSiO6P7NDLFnCg5sq4u91qhvXA1zM6YbCibxmQeV1WmeesUnP3AoGaf3MJiTgb_3zSU_oKrozTwfNSFQArJ2hxx1VL13HlyncKPAWxeoZnh-O3kJ-JSMJHaDnq0-TN8UKtLXNe2sFGHavfxUc4OEcdZTevvYT_dElvs6ANNCKfJsXy0'
                />
                <div
                  className='absolute bottom-0 right-2 bg-green-500 p-0.5 rounded-full border-2 border-white'
                  title='Verified'
                >
                  <Check color='white' />
                </div>
              </div>
              <div className='flex justify-between items-start mb-2'>
                <div>
                  <h3 className='font-bold text-lg text-[#111418]'>David M.</h3>
                  <p className='text-sm text-primary font-medium'>English Literature</p>
                </div>
                <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold'>
                  <Star size={20} />
                  <p>5.0</p>
                </div>
              </div>
              <p className='text-gray-500 text-sm line-clamp-2 mb-4 flex-1'>
                Passionate about literature and creative writing. Helping students find their voice.
              </p>
              <div className='flex items-center justify-between pt-4 border-t border-gray-100 mt-auto'>
                <span className='font-bold text-lg text-[#111418]'>
                  $35<span className='text-sm text-gray-400 font-normal'>/hr</span>
                </span>
                <button className='cursor-pointer text-primary text-sm font-bold hover:bg-blue-50 px-3 py-1.5 rounded transition-colors'>
                  View Profile
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Tutor Card 3 --> */}
          <div className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col '>
            <div
              className='h-24 bg-linear-to-r from-teal-500 to-green-400 relative'
              data-alt='Teal gradient header background'
            ></div>
            <div className='px-5 pb-5 pt-0 flex flex-col flex-1'>
              <div className='relative -mt-10 mb-3'>
                <img
                  alt='Emily R. Tutor Portrait'
                  className='size-20 rounded-full border-4 border-white object-cover shadow-sm'
                  data-alt='Portrait of a professional woman'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuDszoGTAgrgHxRj46zc7jWIovWUSekxfevl0MEI9URuKWTj7loymaPsNx0gPOtAWc4Q0_1Lr8llpg4ldOnmibxCJxWncD7wsn9eFYtfUduoOOoR6u_9fkeIGaCThsoklA0AcR795qIH-x1y7OAp2P1dqHiqzApq5SPNOEbcPrdUGtzv4K5FiGLlcwi6ZFGpvrRG3szhlCUokeKf_UG5XVXCXfOJVzdfTxiB2xu1OjvJOqIALL7BwgRc4NcGoj0PTJwdoZK1_0t-dSQ'
                />
                <div
                  className='absolute bottom-0 right-2 bg-green-500 p-0.5 rounded-full border-2 border-white'
                  title='Verified'
                >
                  <Check color='white' />
                </div>
              </div>
              <div className='flex justify-between items-start mb-2'>
                <div>
                  <h3 className='font-bold text-lg text-[#111418]'>Emily R.</h3>
                  <p className='text-sm text-primary font-medium'>Chemistry &amp; Biology</p>
                </div>
                <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold'>
                  <Star size={20} />
                  <p>4.9</p>
                </div>
              </div>
              <p className='text-gray-500 text-sm line-clamp-2 mb-4 flex-1'>
                Medical student offering comprehensive tutoring in high school and college sciences.
              </p>
              <div className='flex items-center justify-between pt-4 border-t border-gray-100 mt-auto'>
                <span className='font-bold text-lg text-[#111418]'>
                  $50<span className='text-sm text-gray-400 font-normal'>/hr</span>
                </span>
                <button className='cursor-pointer text-primary text-sm font-bold hover:bg-blue-50 px-3 py-1.5 rounded transition-colors'>
                  View Profile
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Tutor Card 4 --> */}
          <div className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col '>
            <div
              className='h-24 bg-linear-to-r from-orange-400 to-red-400 relative'
              data-alt='Orange gradient header background'
            ></div>
            <div className='px-5 pb-5 pt-0 flex flex-col flex-1'>
              <div className='relative -mt-10 mb-3'>
                <img
                  alt='Michael T. Tutor Portrait'
                  className='size-20 rounded-full border-4 border-white object-cover shadow-sm'
                  data-alt='Portrait of a man in a shirt'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuCRk23HCiyiXAnEbyTah8xx0WhO9gY1YrmDj_eji2ua0gXGHr1NcT0en-MPKE-CNRVvJyd-bDvE-AlZF6EaoV-s9K6PKVY3h1daWbh7ia2dQvHHyKcT4AjkMLuG1IgSlQdYh5Mia_Plbg731h2uudUnC1oss-odxLLsU29yVL-C6HN4q-CG77oEDE8OK1Rq2UT3wBxiIQ-fRVC0jncNSHf7DmqVP19khshl5ZiA_nqlCxiPQzkHuyffeggAXfvV7HuGHUfKCIGtMus'
                />
                <div
                  className='absolute bottom-0 right-2 bg-green-500 p-0.5 rounded-full border-2 border-white'
                  title='Verified'
                >
                  <Check color='white' />
                </div>
              </div>
              <div className='flex justify-between items-start mb-2'>
                <div>
                  <h3 className='font-bold text-lg text-[#111418]'>Michael T.</h3>
                  <p className='text-sm text-primary font-medium'>Coding &amp; Web Dev</p>
                </div>
                <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold'>
                  <Star size={20} />
                  <p>5.0</p>
                </div>
              </div>
              <p className='text-gray-500 text-sm line-clamp-2 mb-4 flex-1'>
                Senior Software Engineer helping you master Python, JavaScript, and React.
              </p>
              <div className='flex items-center justify-between pt-4 border-t border-gray-100 mt-auto'>
                <span className='font-bold text-lg text-[#111418]'>
                  $60<span className='text-sm text-gray-400 font-normal'>/hr</span>
                </span>
                <button className='cursor-pointer text-primary text-sm font-bold hover:bg-blue-50 px-3 py-1.5 rounded transition-colors'>
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
