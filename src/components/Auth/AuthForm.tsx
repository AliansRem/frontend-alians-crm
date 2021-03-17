import { Button, Form, FormProps, Input } from 'antd'
import React from 'react'
const AuthForm: React.FC<FormProps> = props => (
  <Form
    {...props}
    layout='vertical'
  >

    <Form.Item
      required
      name='username'
      label='Логин'
      rules={[
        {
        required: true,
        message: 'Введите логин!',
      },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      required
      name='password'
      label='Пароль'
      rules={[
        {
        required: true,
        message: 'Введите пароль!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item>
      <Button
        type='primary'
        htmlType='submit'
      >
        Войти
      </Button>
    </Form.Item>
  </Form>

)

export default AuthForm
