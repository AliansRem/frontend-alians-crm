import { Card, message } from 'antd'
import React from 'react'
import { useMutation } from 'react-query'
import AuthForm from './AuthForm'
import { saveToken, signIn } from '../../API/Auth'


export type AuthProps = {
  logIn: () => void
}

const Auth: React.FC<AuthProps> = ({
  logIn
}) => {
  const { mutate } = useMutation('auth', signIn, {
    onSuccess: data => {
      saveToken(data.token)
      message.success('Вы вошли в систему.')
      logIn()
    },
    onError: () => { 
      message.error('Не удалось авторизоваться.') 
    }
  })

  return (
    <div>
      <Card
        title='Вход в систему'
      >
        <AuthForm 
          onFinish={mutate}
        />
      </Card>
    </div>
  )
}

export default Auth
