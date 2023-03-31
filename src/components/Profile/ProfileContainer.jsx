import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from '../utils'
import env from 'react-dotenv'

class ProfileContainer extends React.Component {

  componentDidMount () {
    const { params } = this.props.router
    let userId = params?.userId
    if (userId) {
      axios.get(`${env.API_URL}/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
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