import React from 'react'
import { Field, Form, Formik } from 'formik'
import loginFormSchema from '../FormValidation/LoginFormSchema'
import CommonFormikField from '../common/CommonFormikField/CommonFormikField'

const Login = ({ onSubmit }) => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      onSubmit={(values) => {
        onSubmit(values)
      }}
      validationSchema={loginFormSchema}
    >
      {(props) => (
        <Form>
          <CommonFormikField name={'email'} placeholder={'email'} type={'email'}/>
          <CommonFormikField name={'password'} placeholder={'password'} type={'password'}/>

          <div>
            <Field type={'checkbox'} name={'rememberMe'} placeholder={'rememberMe'}/>
            <label htmlFor={'rememberMe'}> remember me </label>
          </div>

          <button type={'submit'}>Log in</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default Login

