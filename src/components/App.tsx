import React, { useState } from 'react';
import Workspace from './Workspace';
import Auth from './Auth';
import Header from './Header';
import Menu from './Menu';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const logIn = () => setIsAuthenticated(true)

  const [menuVisible, setMenuVisible] = useState(false)
  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  if (!isAuthenticated) {
    return (
      <Auth 
        logIn={logIn}
      />
    )
  }

  return (
    <>
      <Header 
        openMenu={openMenu}
      />
      <Menu 
        visible={menuVisible}
        close={closeMenu}
      />
      <Workspace />
    </>
  )
}

export default App;
