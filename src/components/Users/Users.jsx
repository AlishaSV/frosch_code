import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../images-store/images/icons8-cat-profile-100.png'
import { NavLink } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import { authAxiosInstance } from '../../axios'

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
            className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : null}`}
            onClick={() => {props.onPageChanged(p)}}
          >
            {p}
          </button>
        ))}
      </div>
      {props?.isFetching ? <Preloader/> :
        props.users.map((u) =>
          (
            <div key={u?.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u?.photos?.small ?? userPhoto} className={styles.userPhoto} alt={'profilePhoto'}/>
                  </NavLink>
              </div>
              <div>
                {u?.followed
                  ? <button onClick={() => {
                    authAxiosInstance.delete(`follow/${u.id}`)
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u?.id)
                      }
                    })

                  }}>Unfollow</button>

                  : <button onClick={() => {
                    authAxiosInstance.post(`follow/${u.id}`)
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u?.id)
                      }
                    })

                  }}>Follow</button>}
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
        )
      }
    </div>
  )
}

export default Users