import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from '../../redux/users-reducer'
import { getUsers } from '../../api/api'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.setIsFetching(true)
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false)
      this.props.setUsers(data.items)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setIsFetching(false)
      this.props.setUsers(data.items)
    })
  }

  render () {
    return <>
      <Users
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
    isFetching: state.usersPage.usersData.isFetching
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
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
})(UsersContainer)

