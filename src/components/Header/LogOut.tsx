import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'


const LogOut: React.FC = () => {
  return (
    <Button
      danger
      icon={<LogoutOutlined />}
    >
      Выход
    </Button>
  )
}

export default LogOut
