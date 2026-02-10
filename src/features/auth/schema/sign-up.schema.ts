import * as z from 'zod'
import { UserRole } from '../enums/user.enum'

export const signUpSchema = z
  .object({
    userRole: z.enum(UserRole),
    fullName: z.string().min(1, 'Full name is required'),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters long'), //HTML input luôn trả về string,
    email: z.email('Invalid email address'),
    subjects: z.string().array(),
    experience: z.string().min(20, 'Experience must be at least 20 characters long').optional(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password không khớp',
    path: ['confirmPassword'], //Lỗi hiển thị ở confirmPassword
  })
