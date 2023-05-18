import React from 'react'
import { loginToAppTC } from '../../redux/auth-reducer'
import Login from './Login'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import styles from './LoginContainer.module.css'

const LoginContainer = ({ isAuth, isTriedToLogIn, loginToAppTC }) => {

  return (
    <div>
      <Login
        onSubmit={(values) => {
          const { email, password, rememberMe } = values
          loginToAppTC(email, password, rememberMe)
        }}
      />
      {
        !isAuth && isTriedToLogIn ?
          (<span className={styles.error}>Incorrect email or password</span>) : null
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  login: state.auth.authData.login,
  isAuth: state.auth.authData.isAuth,
  isTriedToLogIn: state.auth.authData.isTriedToLogIn
})

export default compose(withAuthRedirect, connect(mapStateToProps, { loginToAppTC }))(LoginContainer)