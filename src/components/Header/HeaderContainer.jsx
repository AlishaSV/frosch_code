import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'
import { axiosInstance } from '../../axios'

class HeaderContainer extends React.Component {
  componentDidMount () {
    axiosInstance.get(`auth/me`, {
      withCredentials: true
    })
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }

  render () {

    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.authData.isAuth,
  login: state.auth.authData.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)