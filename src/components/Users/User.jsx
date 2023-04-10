import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../images-store/images/icons8-cat-profile-100.png'
import styles from './Users.module.css'

const User = ({
  id, name, location, photos, followingInProgress, followed, Unfollow, Follow
}) => {
  return (<div>
    <div>
      <div>
        <NavLink to={'/profile/' + id}>
          <img src={photos?.small ?? userPhoto} className={styles.userPhoto} alt={'profilePhoto'}/>
        </NavLink>
      </div>
      <div>
        {followed ? (
          <button
            disabled={followingInProgress} onClick={() => {Unfollow()}}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress}
            onClick={() => {Follow()}}
          >
            Follow
          </button>
        )}
      </div>
    </div>
    <div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{location?.city}</span>
        <span>{location?.country}</span>
      </div>
    </div>
  </div>)
}

export default User