import React from 'react'
import { Route, Switch } from 'react-router-dom'


const SubTitle = () => {
  return (
    <Switch>
      <Route exact path='/'>Главная страница</Route>
    </Switch>
  )
}

export default SubTitle
