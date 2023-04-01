import React from 'react'
import styles from './Users.module.css'
import Preloader from '../Preloader/Preloader'
import { authAxiosInstance } from '../../axios'
import User from './User'

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const Unfollow = (user) => {
    props.toggleFollowingProgress(true, user.id)
    authAxiosInstance.delete(`follow/${user.id}`)
    .then(response => {
      if (response.data.resultCode === 0) {
        props.unfollow(user?.id)
      }
      props.toggleFollowingProgress(false, user.id)
    })
  }

  const Follow = (user) => {
    props.toggleFollowingProgress(true, user.id)
    authAxiosInstance.post(`follow/${user.id}`)
    .then(response => {
      if (response.data.resultCode === 0) {
        props.follow(user?.id)
      }
      props.toggleFollowingProgress(false, user.id)
    })

  }

  return (
    <div>
      <div>
        {pages.map((p, i) => (
          <button
            key={i}
            className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : null}`}
            onClick={() => {props.onPageChanged(p)}}
          >
            {p}
          </button>
        ))}
      </div>
      {props?.isFetching ? <Preloader/> :
        props.users.map((user) => user?.id ?
          <User
            key={user.id}
            id={user.id}
            name={user?.name}
            location={user?.location}
            photos={user?.photos}
            followingInProgress={props?.followingInProgress?.some((id) => id === user.id)}
            followed={user?.followed}
            Unfollow={() => {Unfollow(user)}}
            Follow={() => {Follow(user)}}
          /> : null
        )
      }
    </div>
  )
}

export default Users