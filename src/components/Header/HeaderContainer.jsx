import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logoutTC } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.getAuthUserData()
  }

  render () {

    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.authData.isAuth,
  login: state.auth.authData.login,
  isLoading: state.auth.authData.isLoading
})

export default connect(mapStateToProps, { getAuthUserData, logoutTC })(HeaderContainer)