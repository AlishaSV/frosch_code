import React from 'react'
import styles from './Users.module.css'

let Users = ({ users, follow, unfollow }) => {
  return (
    <div>
      {users.map((u) =>
        (<div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={styles.userPhoto}/>
              </div>
              <div>
                {u.followed ? <button onClick={() => {unfollow(u.id)}}>Unfollow</button>
                  : <button onClick={() => {follow(u.id)}}>Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        )
      )}
    </div>
  )
}

export default Users