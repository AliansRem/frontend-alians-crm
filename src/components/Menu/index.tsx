import { Drawer } from 'antd'
import React from 'react'


export type MenuProps = {
  visible: boolean
  close: () => void
}

const Menu: React.FC<MenuProps> = ({
  visible,
  close
}) => {
  return (
    <Drawer
      visible={visible}
      onClose={close}
      title='Главное меню'
      width={400}
      placement='left'
    >

    </Drawer>
  )
}

export default Menu
