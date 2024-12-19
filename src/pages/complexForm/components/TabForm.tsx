import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, Form, Input, InputNumber, message, Result, Select, Space, Tabs } from 'antd'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { COUNTRY_OPTIONS, PAYMENT_OPTIONS, PRODUCT_OPTIONS } from '../const'

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

const schema = yup.object().shape({
  firstName: yup.string().required('名字是必填项'),
  lastName: yup.string().required('姓氏是必填项'),
  email: yup.string().email('请输入有效的邮箱地址').required('邮箱是必填项'),
  password: yup.string()
    .required('密码是必填项')
    .min(6, '密码至少需要6个字符'),
  confirmPassword: yup.string()
    .required('确认密码是必填项')
    .oneOf([yup.ref('password')], '密码必须匹配'),
  address: yup.string().required('地址是必填项'),
  city: yup.string().required('城市是必填项'),
  zipCode: yup.string().required('邮编是必填项'),
  country: yup.string().required('国家是必填项'),
  product: yup.string().required('请选择一个产品'),
  quantity: yup.number()
    .required('数量是必填项')
    .min(1, '数量至少为1'),
  paymentMethod: yup.string().required('请选择一种付款方式'),
})

export default function TabForm() {
  const [activeTab, setActiveTab] = useState('1')
  const [submitted, setSubmitted] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const tabFieldsMap = {
    1: ['firstName', 'lastName', 'email', 'password', 'confirmPassword'],
    2: ['address', 'city', 'zipCode', 'country'],
    3: ['product', 'quantity', 'paymentMethod'],
  }

  const findFirstErrorTab = (errors: object) => {
    const errorFields = Object.keys(errors)
    return Object.entries(tabFieldsMap).find(([_, fields]) =>
      fields.some(field => errorFields.includes(field)),
    )?.[0] || '1'
  }

  const onError = (errors: object) => {
    const firstErrorTab = findFirstErrorTab(errors)
    setActiveTab(firstErrorTab)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
    message.success('订单提交成功！')
  }

  const items = [
    {
      key: '1',
      label: '用户信息',
      children: (
        <>
          <Form.Item
            label="名字"
            validateStatus={errors.firstName ? 'error' : ''}
            help={errors.firstName?.message}
          >
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="姓氏"
            validateStatus={errors.lastName ? 'error' : ''}
            help={errors.lastName?.message}
          >
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="邮箱"
            validateStatus={errors.email ? 'error' : ''}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="密码"
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="确认密码"
            validateStatus={errors.confirmPassword ? 'error' : ''}
            help={errors.confirmPassword?.message}
          >
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />
          </Form.Item>
        </>
      ),
    },
    {
      key: '2',
      label: '联系信息',
      children: (
        <>
          <Form.Item
            label="地址"
            validateStatus={errors.address ? 'error' : ''}
            help={errors.address?.message}
          >
            <Controller
              name="address"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="城市"
            validateStatus={errors.city ? 'error' : ''}
            help={errors.city?.message}
          >
            <Controller
              name="city"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="邮编"
            validateStatus={errors.zipCode ? 'error' : ''}
            help={errors.zipCode?.message}
          >
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="国家"
            validateStatus={errors.country ? 'error' : ''}
            help={errors.country?.message}
          >
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select {...field} placeholder="选择国家" options={COUNTRY_OPTIONS} />
              )}
            />
          </Form.Item>
        </>
      ),
    },
    {
      key: '3',
      label: '订单信息',
      children: (
        <>
          <Form.Item
            label="产品"
            validateStatus={errors.product ? 'error' : ''}
            help={errors.product?.message}
          >
            <Controller
              name="product"
              control={control}
              render={({ field }) => (
                <Select {...field} placeholder="选择产品" options={PRODUCT_OPTIONS} />
              )}
            />
          </Form.Item>

          <Form.Item
            label="数量"
            validateStatus={errors.quantity ? 'error' : ''}
            help={errors.quantity?.message}
          >
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <InputNumber {...field} min={1} style={{ width: '100%' }} />
              )}
            />
          </Form.Item>

          <Form.Item
            label="付款方式"
            validateStatus={errors.paymentMethod ? 'error' : ''}
            help={errors.paymentMethod?.message}
          >
            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <Select {...field} placeholder="选择付款方式" options={PAYMENT_OPTIONS} />
              )}
            />
          </Form.Item>
        </>
      ),
    },
  ]

  return (
    <Space direction="vertical" size="large" className="w-100% max-w-240">
      {submitted
        ? (
            <Card>
              <Result
                status="success"
                title="订单提交成功！"
                extra={[
                  <Button key="continue" type="primary" onClick={() => setSubmitted(false)}>
                    继续提交
                  </Button>,
                ]}
              />
            </Card>
          )
        : (
            <Card>
              <Form layout="vertical" onFinish={handleSubmit(onSubmit, onError)}>
                <Tabs items={items} activeKey={activeTab} onChange={setActiveTab} />
                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    提交订单
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}
    </Space>
  )
}
