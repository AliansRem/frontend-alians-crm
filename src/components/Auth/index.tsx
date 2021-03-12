import { Card } from 'antd'
import React from 'react'
import AuthForm from './AuthForm'


export type AuthProps = {
  logIn: () => void
}

const Auth: React.FC<AuthProps> = () => {
  return (
    <div>
      <Card
        title='Вход в систему'
      >
        <AuthForm />
      </Card>
    </div>
  )
}

export default Auth
