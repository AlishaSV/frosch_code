import React from 'react'
import { loginToAppTC } from '../../redux/auth-reducer'
import Login from './Login'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {
  componentDidMount () {
    this.props.loginToAppTC()
  }

  render () {

    return (
      <Login
        {...this.props}
        onSubmit={(values) => {
          console.log(values)
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.authData.login
})

export default connect(mapStateToProps, { loginToAppTC })(LoginContainer)