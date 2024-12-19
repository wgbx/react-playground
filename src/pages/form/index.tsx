import { yupResolver } from '@hookform/resolvers/yup'
import { Form as AntForm, Button, Card, Input, Typography } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import './index.scss'

const { Title } = Typography

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('提交的数据:', data)
  }

  return (
    <Card className="form-container">
      <Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>
        用户注册
      </Title>
      <AntForm onFinish={handleSubmit(onSubmit)} layout="vertical">
        <AntForm.Item
          label="用户名"
          validateStatus={errors.username ? 'error' : ''}
          help={errors.username?.message}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="请输入用户名" />
            )}
          />
        </AntForm.Item>

        <AntForm.Item
          label="密码"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="请输入密码" />
            )}
          />
        </AntForm.Item>

        <AntForm.Item
          label="电子邮件"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="请输入电子邮件" />
            )}
          />
        </AntForm.Item>

        <AntForm.Item>
          <Button type="primary" htmlType="submit" block>
            提交
          </Button>
        </AntForm.Item>
      </AntForm>
    </Card>
  )
}
