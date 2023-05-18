import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatusTC, getUserProfileTC, updateStatusTC } from '../../redux/profile-reducer'
import { withRouter } from '../utils'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount () {
    const { params } = this.props.router
    let userId = params?.userId
    if (!userId && this.props.authorized) {
      userId = this.props.authorized
    }

    if (userId) {
      this.props.getUserProfileTC(userId)
      this.props.getStatusTC(userId)
    }
  }

  componentDidUpdate () {
    const { params } = this.props.router
    let userId = params?.userId

    if (!userId && this.props.authorized) {
      userId = this.props.authorized
    }

    if (userId && !this.props.profile) {
      this.props.getUserProfileTC(userId)
      this.props.getStatusTC(userId)
    }
  }

  render () {
    return (
      <div>
        <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.postsData.profile,
  status: state.profilePage.postsData.status,
  authorized: state.auth.authData.userId,
  isAuth: state.auth.authData.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC }),
  withRouter
)(ProfileContainer)