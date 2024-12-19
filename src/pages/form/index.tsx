import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './index.scss'

interface FormData {
  username: string
  password: string
  email: string
}

const schema = yup.object().shape({
  username: yup.string().required('用户名是必填项').min(3, '用户名至少3个字符'),
  password: yup.string().required('密码是必填项').min(6, '密码至少6位'),
  email: yup.string().email('请输入有效的电子邮件地址').required('电子邮件是必填项'),
})

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('提交的数据:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-page flex-col">
      <label>用户名: </label>
      <input {...register('username')} />
      {errors.username && <p className="error-tip">{errors.username.message}</p>}

      <label>密码: </label>
      <input type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <label>电子邮件: </label>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <input className="mt-3 cursor-pointer" type="submit" value="提交" />
    </form>
  )
}
