import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfileTC } from '../../redux/profile-reducer'
import { withRouter } from '../utils'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

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
        <Profile {...this.props}/>
      </div>
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  const { profile } = state.profilePage.postsData
  return { profile }
}

export default connect(mapStateToProps, { getUserProfileTC })(withRouter(AuthRedirectComponent))