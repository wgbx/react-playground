import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './index.scss'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  address: string
  city: string
  zipCode: string
  country: string
  product: string
  quantity: number
  paymentMethod: string
}

// 定义表单验证规则
const schema = yup.object().shape({
  firstName: yup.string().required('名字是必填项'),
  lastName: yup.string().required('姓氏是必填项'),
  email: yup.string().email('请输入有效的邮箱地址').required('邮箱是必填项'),
  password: yup.string().min(6, '密码至少需要6个字符').required('密码是必填项'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], '密码必须匹配')
    .required('确认密码是必填项'),
  address: yup.string().required('地址是必填项'),
  city: yup.string().required('城市是必填项'),
  zipCode: yup.string().required('邮编是必填项'),
  country: yup.string().required('国家是必填项'),
  product: yup.string().required('请选择一个产品'),
  quantity: yup.number().required('数量是必填项').min(1, '数量至少为1'),
  paymentMethod: yup.string().required('请选择一种付款方式'),
})

function OrderForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
  }

  return (
    <div className="complex-form-page form-container">
      {submitted
        ? (
            <div className="success-message">订单提交成功！</div>
          )
        : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>用户信息</h2>
              <div className="form-group">
                <label>名字</label>
                <input {...register('firstName')} />
                <p>{errors.firstName?.message}</p>
              </div>
              <div className="form-group">
                <label>姓氏</label>
                <input {...register('lastName')} />
                <p>{errors.lastName?.message}</p>
              </div>
              <div className="form-group">
                <label>邮箱</label>
                <input {...register('email')} />
                <p>{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <label>密码</label>
                <input type="password" {...register('password')} />
                <p>{errors.password?.message}</p>
              </div>
              <div className="form-group">
                <label>确认密码</label>
                <input type="password" {...register('confirmPassword')} />
                <p>{errors.confirmPassword?.message}</p>
              </div>

              <h2>联系信息</h2>
              <div className="form-group">
                <label>地址</label>
                <input {...register('address')} />
                <p>{errors.address?.message}</p>
              </div>
              <div className="form-group">
                <label>城市</label>
                <input {...register('city')} />
                <p>{errors.city?.message}</p>
              </div>
              <div className="form-group">
                <label>邮编</label>
                <input {...register('zipCode')} />
                <p>{errors.zipCode?.message}</p>
              </div>
              <div className="form-group">
                <label>国家</label>
                <select {...register('country')}>
                  <option value="">选择国家</option>
                  <option value="China">中国</option>
                  <option value="USA">美国</option>
                  <option value="UK">英国</option>
                </select>
                <p>{errors.country?.message}</p>
              </div>

              <h2>订单信息</h2>
              <div className="form-group">
                <label>产品</label>
                <select {...register('product')}>
                  <option value="">选择产品</option>
                  <option value="Product1">产品1</option>
                  <option value="Product2">产品2</option>
                </select>
                <p>{errors.product?.message}</p>
              </div>
              <div className="form-group">
                <label>数量</label>
                <input type="number" {...register('quantity')} />
                <p>{errors.quantity?.message}</p>
              </div>
              <div className="form-group">
                <label>付款方式</label>
                <select {...register('paymentMethod')}>
                  <option value="">选择付款方式</option>
                  <option value="CreditCard">信用卡</option>
                  <option value="PayPal">PayPal</option>
                </select>
                <p>{errors.paymentMethod?.message}</p>
              </div>

              <button type="submit">提交订单</button>
            </form>
          )}
    </div>
  )
}

export default OrderForm
