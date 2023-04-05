import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  follow,
  getUsersTC,
  setCurrentPage,
  setIsFetching,
  toggleFollowingProgress,
  unfollow
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize)
  }

  render () {
    return <>
      <Users
        followingInProgress={this.props.followingInProgress}
        isFetching={this.props.isFetching}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.usersData.users,
    pageSize: state.usersPage.usersData.pageSize,
    totalUsersCount: state.usersPage.usersData.totalUsersCount,
    currentPage: state.usersPage.usersData.currentPage,
    isFetching: state.usersPage.usersData.isFetching,
    followingInProgress: state.usersPage.usersData.followingInProgress
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: follow,
//     unfollow: unfollow,
//     setUsers: setUsers,
//     setCurrentPage: setCurrentPage,
//     setTotalUsersCount: setTotalUsersCount,
//     toggleIsFetching: setIsFetching
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setIsFetching,
  toggleFollowingProgress,
  getUsersTC
})(UsersContainer)

