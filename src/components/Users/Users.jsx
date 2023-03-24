import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../images-store/images/icons8-cat-profile-100.png'

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
      {props.users.map((u) =>
        (
          <div key={u?.id}>
            <span>
              <div>
                <img src={u?.photos?.small ?? userPhoto} className={styles.userPhoto}/>
              </div>
              <div>
                {u?.followed ? <button onClick={() => {props.unfollow(u?.id)}}>Unfollow</button>
                  : <button onClick={() => {props.follow(u?.id)}}>Follow</button>}
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

export default Users