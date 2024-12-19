export interface FormData {
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

export const COUNTRY_OPTIONS = [
  { value: 'China', label: '中国' },
  { value: 'USA', label: '美国' },
  { value: 'UK', label: '英国' },
]

export const PRODUCT_OPTIONS = [
  { value: 'Product1', label: '产品1' },
  { value: 'Product2', label: '产品2' },
]

export const PAYMENT_OPTIONS = [
  { value: 'CreditCard', label: '信用卡' },
  { value: 'PayPal', label: 'PayPal' },
]
