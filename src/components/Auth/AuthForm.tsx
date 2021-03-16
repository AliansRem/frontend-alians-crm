import { Button, Form, FormProps, Input } from 'antd'
import React from 'react'
import 'antd/dist/antd.css';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
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
