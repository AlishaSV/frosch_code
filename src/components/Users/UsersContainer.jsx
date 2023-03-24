import UsersAPIComponent from './UsersAPIComponent'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

