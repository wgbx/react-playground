import { Button, Card, Form, Input, InputNumber, message, Result, Select, Space, Typography } from 'antd'
import { useState } from 'react'
import { COUNTRY_OPTIONS, PAYMENT_OPTIONS, PRODUCT_OPTIONS } from './const '
import './index.scss'

const { Title } = Typography

function OrderForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form] = Form.useForm()

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
    message.success('订单提交成功！')
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', padding: '24px' }}>
      {submitted
        ? (
            <Card>
              <Result
                status="success"
                title="订单提交成功！"
                extra={[
                  <Button
                    key="continue"
                    type="primary"
                    onClick={() => setSubmitted(false)}
                  >
                    继续提交
                  </Button>,
                ]}
              />
            </Card>
          )
        : (
            <Card>
              <Form form={form} onFinish={onSubmit} layout="vertical">
                <Title level={4}>用户信息</Title>
                <Form.Item
                  label="名字"
                  name="firstName"
                  rules={[{ required: true, message: '名字是必填项' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="姓氏"
                  name="lastName"
                  rules={[{ required: true, message: '姓氏是必填项' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="邮箱"
                  name="email"
                  rules={[
                    { required: true, message: '邮箱是必填项' },
                    { type: 'email', message: '请输入有效的邮箱地址' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    { required: true, message: '密码是必填项' },
                    { min: 6, message: '密码至少需要6个字符' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="确认密码"
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: '确认密码是必填项' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('密码必须匹配'))
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Title level={4}>联系信息</Title>
                <Form.Item
                  label="地址"
                  name="address"
                  rules={[{ required: true, message: '地址是必填项' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="城市"
                  name="city"
                  rules={[{ required: true, message: '城市是必填项' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="邮编"
                  name="zipCode"
                  rules={[{ required: true, message: '邮编是必填项' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="国家"
                  name="country"
                  rules={[{ required: true, message: '国家是必填项' }]}
                >
                  <Select
                    placeholder="选择国家"
                    options={COUNTRY_OPTIONS}
                  />
                </Form.Item>

                <Title level={4}>订单信息</Title>
                <Form.Item
                  label="产品"
                  name="product"
                  rules={[{ required: true, message: '请选择一个产品' }]}
                >
                  <Select
                    placeholder="选择产品"
                    options={PRODUCT_OPTIONS}
                  />
                </Form.Item>

                <Form.Item
                  label="数量"
                  name="quantity"
                  rules={[
                    { required: true, message: '数量是必填项' },
                    { type: 'number', min: 1, message: '数量至少为1' },
                  ]}
                >
                  <InputNumber min={1} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  label="付款方式"
                  name="paymentMethod"
                  rules={[{ required: true, message: '请选择一种付款方式' }]}
                >
                  <Select
                    placeholder="选择付款方式"
                    options={PAYMENT_OPTIONS}
                  />
                </Form.Item>

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

export default OrderForm
