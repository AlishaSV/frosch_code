import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfileTC, setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from '../utils'

class ProfileContainer extends React.Component {

  componentDidMount () {
    const { params } = this.props.router
    let userId = params?.userId
    if (userId) {
      this.props.getUserProfileTC(userId)
    }
  }

  render () {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.postsData.profile
})

export default connect(mapStateToProps, { setUserProfile, getUserProfileTC })(withRouter(ProfileContainer))