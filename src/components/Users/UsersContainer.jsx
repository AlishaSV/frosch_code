import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render () {
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}/>
  }
}

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.usersData.users,
    pageSize: state.usersPage.usersData.pageSize,
    totalUsersCount: state.usersPage.usersData.totalUsersCount,
    currentPage: state.usersPage.usersData.currentPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {dispatch(followAC(usersId))},
    unfollow: (usersId) => {dispatch(unfollowAC(usersId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
    setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

