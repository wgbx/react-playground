import { Row, Tabs } from 'antd'
import BaseForm from './components/BaseForm'
import TabForm from './components/TabForm'

const items = [
  {
    key: 'base',
    label: '基础表单',
    children: <BaseForm />,
  },
  {
    key: 'tab',
    label: '分步表单',
    children: <TabForm />,
  },
]

function ComplexForm() {
  return (
    <Row className="w-100% max-w-200">
      <Tabs items={items} className="w-100% m-3" />
    </Row>
  )
}

export default ComplexForm
