import React from 'react'
import styles from './Users.module.css'
import Preloader from '../Preloader/Preloader'
import User from './User'

let Users = ({
  totalUsersCount,
  pageSize,
  toggleFollowingProgress,
  unfollow,
  follow,
  currentPage,
  onPageChanged,
  isFetching,
  users,
  followingInProgress,
}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((p, i) => (
          <button
            key={i}
            className={`${styles.page} ${currentPage === p ? styles.selectedPage : null}`}
            onClick={() => {onPageChanged(p)}}
          >
            {p}
          </button>
        ))}
      </div>
      {isFetching ? <Preloader/> :
        users.map((user) => user?.id ?
          <User
            key={user.id}
            id={user.id}
            name={user?.name}
            location={user?.location}
            photos={user?.photos}
            followingInProgress={followingInProgress?.some((id) => id === user.id)}
            followed={user?.followed}
            Unfollow={() => {unfollow(user?.id)}}
            Follow={() => {follow(user?.id)}}
          /> : null
        )
      }
    </div>
  )
}

export default Users