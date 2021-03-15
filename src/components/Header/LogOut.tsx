import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { signOut } from '../../API/Auth'


export type LogOutProps = {
  logOut: () => void
}

const LogOut: React.FC<LogOutProps> = ({
  logOut
}) => {
  const onLogOut = () => {
    logOut()
    signOut()
  }

  return (
    <Button
      danger
      icon={<LogoutOutlined />}
      onClick={onLogOut}
    >
      Выход
    </Button>
  )
}

export default LogOut
