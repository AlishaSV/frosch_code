import React from 'react'
import { Field, Form, Formik } from 'formik'
import loginFormSchema from '../FormValidation/LoginFormSchema'
import styles from './Login.module.css'

const Login = ({ onSubmit }) => (<div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      onSubmit={onSubmit}

      validationSchema={loginFormSchema}
    >
      {(props) => (
        <Form>
          <Field name="email">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <input
                  className={meta.touched && meta.error ? styles.errors : styles.inputStyle}
                  type="email"
                  placeholder="email" {...field}
                />
                {meta.touched && meta.error && (
                  <div className={styles.errorsMessage}>{meta.error}</div>
                )}
              </div>
            )}
          </Field>

          <div>
            <Field name={'password'}>
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
              }) => (
                <div>
                  <input
                    className={meta.touched && meta.error ? styles.errors : styles.inputStyle}
                    type="password"
                    placeholder="password" {...field}
                  />
                  {meta.touched && meta.error && (
                    <div className={styles.errorsMessage}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>

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

