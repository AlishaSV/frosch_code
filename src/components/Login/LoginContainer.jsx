import React from 'react'
import { loginToAppTC } from '../../redux/auth-reducer'
import Login from './Login'
import { connect } from 'react-redux'

const LoginContainer = ({ loginToAppTC }) => {
  return (
    <Login
      onSubmit={(values) => {
        const { email, password, rememberMe } = values
        loginToAppTC(email, password, rememberMe)
      }}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.auth.authData.login
})

export default connect(mapStateToProps, { loginToAppTC })(LoginContainer)