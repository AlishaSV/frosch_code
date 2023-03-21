import React from 'react'
import styles from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../images-store/images/icons8-cat-profile-100.png'

class Users extends React.Component {
  constructor (props) {
    super(props)
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  render () {
    return (
      <div>
        {this.props.users.map((u) =>
          (<div key={u?.id}>
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

export default Users