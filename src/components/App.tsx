import React, { useState } from 'react';
import Auth from './Auth';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const logIn = () => setIsAuthenticated(true)

  if (!isAuthenticated) {
    return (
      <Auth 
        logIn={logIn}
      />
    )
  }

  return (
    <>

    </>
  )
}

export default App;
