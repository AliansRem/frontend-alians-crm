import { PageHeader } from 'antd'
import React from 'react'
import SubTitle from './SubTitle'
import { MenuOutlined } from '@ant-design/icons'
import LogOut from './LogOut'


export type HeaderProps = {
  openMenu: () => void
}

const Header: React.FC<HeaderProps> = ({
  openMenu
}) => {
  return (
    <PageHeader 
      title='Alians CRM'
      subTitle={<SubTitle />}
      onBack={openMenu}
      backIcon={<MenuOutlined />}
      extra={<LogOut />}
    />
  )
}

export default Header
