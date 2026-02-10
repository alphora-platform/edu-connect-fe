import { zodResolver } from '@hookform/resolvers/zod'
import { Segmented, Select } from 'antd'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { UserRole } from '../../enums/user.enum'
import { signUpSchema as schema } from '../../schema/sign-up.schema'

//logic form + RHF
type SignUpForm = z.infer<typeof schema>

export default function RegisterForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      userRole: UserRole.TUTOR,
      subjects: [],
    },
  })

  const role = watch('userRole')

  const onSuccess = (data: SignUpForm) => {
    console.log('data :>> ', data)
    reset()
  }

  //toggle show password
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev)
  }

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSuccess)}>
      {/* role */}
      <Controller
        name='userRole'
        control={control}
        render={({ field }) => (
          <Segmented
            className='role-segmented '
            options={[
              {
                value: UserRole.TUTOR,
                label: "I'm a tutor",
              },
              {
                value: UserRole.STUDENT,
                label: "I'm a student",
              },
            ]}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      {/* <!-- Basic Info --> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {/* fullname */}
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Full Name</span>
          <input
            className='h-12 w-full rounded-lg border border-teal/20 bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none   '
            placeholder='Jane Doe'
            type='text'
            {...register('fullName')}
          />
          {errors.fullName?.message && (
            <span className='text-red-500'>{errors.fullName.message}</span>
          )}
        </label>

        {/* number */}
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Phone Number</span>
          <input
            className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none '
            placeholder='+1 (555) 000-0000'
            type='tel'
            {...register('phoneNumber')}
          />
          {errors.phoneNumber?.message && (
            <span className='text-red-500'>{errors.phoneNumber.message}</span>
          )}
        </label>
      </div>
      <label className='flex flex-col gap-1.5'>
        <span className='text-sm font-medium text-text-main '>Email Address</span>
        <input
          className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'
          placeholder='name@example.com'
          type='email'
          {...register('email')}
        />
        {errors.email?.message && <span className='text-red-500'>{errors.email.message}</span>}
      </label>

      {/* <!-- Tutor Specific: Subjects --> */}

      <Controller
        name='subjects'
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            mode='tags'
            className='subject-select'
            options={[
              { label: 'Math', value: 'Math' },
              { label: 'Physics', value: 'Physics' },
            ]}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />

      {/* <!-- Tutor Specific: Experience --> */}
      {!role && (
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Experience</span>
          <textarea
            className='w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none'
            placeholder='Tell us about your teaching experience...'
            rows={3}
            {...register('experience')}
          ></textarea>
          {errors.experience?.message && (
            <span className='text-red-500'>{errors.experience.message}</span>
          )}
        </label>
      )}

      {/* <!-- Password Section --> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Password</span>
          <div className='relative'>
            <input
              className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'
              type={`${isShowPassword ? 'text' : 'password'}`}
              {...register('password')}
            />

            <button
              className='absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main'
              type='button'
              onClick={handleShowPassword}
            >
              <EyeOff className={`${isShowPassword ? 'hidden' : 'block'}`} />
              <Eye className={`${isShowPassword ? 'block' : 'hidden'}`} />
            </button>
          </div>
          {errors.password?.message && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}
        </label>
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-text-main '>Confirm Password</span>
          <div className='relative'>
            <input
              className='h-12 w-full rounded-lg border border-teal/20  bg-white  text-text-main  placeholder:text-text-muted px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'
              type={`${isShowPassword ? 'text' : 'password'}`}
              {...register('confirmPassword')}
            />
          </div>
          {errors.confirmPassword && (
            <span className='text-red-500'>{errors.confirmPassword.message}</span>
          )}
        </label>
      </div>

      {/* <!-- Submit Button --> */}
      <button
        className='mt-2 h-12 w-full rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-sm transition-all active:scale-[0.99]'
        type='submit'
      >
        Create Account
      </button>
    </form>
  )
}
