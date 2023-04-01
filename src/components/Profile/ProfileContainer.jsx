import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from '../utils'
import { getUserProfile } from '../../api/api'

class ProfileContainer extends React.Component {

  componentDidMount () {
    const { params } = this.props.router
    let userId = params?.userId
    if (userId) {
      getUserProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))