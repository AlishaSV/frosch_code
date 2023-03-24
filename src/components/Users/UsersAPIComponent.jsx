import React from 'react'
import styles from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../images-store/images/icons8-cat-profile-100.png'

class UsersAPIComponent extends React.Component {
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

  getPages = () => {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return pages
  }

  render () {
    return (
      <div>
        <div>
          {this.getPages().map((p, i) => (
            <button
              key={i}
              className={`${styles.page} ${this.props.currentPage === p ? styles.selectedPage : null}`}
              onClick={() => {this.onPageChanged(p)}}
            >
              {p}
            </button>
          ))}
        </div>
        {this.props.users.map((u) =>
          (
            <div key={u?.id}>
            <span>
              <div>
                <img src={u?.photos?.small ?? userPhoto} className={styles.userPhoto}/>
              </div>
              <div>
                {u?.followed ? <button onClick={() => {this.props.unfollow(u?.id)}}>Unfollow</button>
                  : <button onClick={() => {this.props.follow(u?.id)}}>Follow</button>}
              </div>
            </span>
              <span>
              <span>
                <div>{u?.name}</div>
              </span>
              <span>
                <div>{u?.location?.city}</div>
                <div>{u?.location?.country}</div>
              </span>
            </span>
            </div>
          )
        )}
      </div>
    )
  }
}

export default UsersAPIComponent