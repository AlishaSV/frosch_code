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
    if (userId) {
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

let mapStateToProps = (state) => {
  const { profile, status } = state.profilePage.postsData
  return { profile, status }
}

export default compose(
  connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC }),
  withRouter
)(ProfileContainer)