// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import { connect } from 'react-redux'
// import { loginToAppTC } from '../../redux/auth-reducer'
//
// const onSubmit = (formData) => {
//   console.log(formData)
// }
//
// const LoginForm = ({
//   handleSubmit
// }) => {
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Field placeholder={'Login'} name={'login'} component={'input'}/>
//       </div>
//       <div>
//         <Field placeholder={'Password'} name={'password'} component={'input'}/>
//       </div>
//       <div>
//         <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
//       </div>
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   )
// }
//
// const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
//
// class Login extends React.Component {
//   componentDidMount () {
//     this.props.loginToAppTC()
//   }
//
//   render () {
//
//     return (
//       <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit} loginToApp={this.props.loginToAppTC}/>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => ({
//   isLoggedIn: state.auth.authData.isLoggedIn
// })
//
// export default connect(mapStateToProps, { loginToAppTC })(Login)

import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import loginFormSchema from '../FormValidation/LoginFormSchema'

const Login = ({ onSubmit }) => (<div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }
      }
      onSubmit={onSubmit}

      validationSchema={loginFormSchema}>
      {() => (
        <Form>
          <div>
            <Field type={'email'} name={'email'} placeholder={'email'} autoComplete={'email'}/>
          </div>
          <ErrorMessage name="email" component="div"/>

          <div>
            <Field type={'password'} name={'password'} placeholder={'password'} autoComplete={'password'}/>
          </div>
          <ErrorMessage name="password" component="div"/>

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

