import React from 'react'
import NavLink from '../../NavLink'
import s from './DialogItem.module.css'

const DialogItem = ({ id, title, avatar }) => {

  return (
    <div className={s.itemWrapper}>
      <img alt={id} className={s.avatar} src={avatar}/>
      <NavLink path={'/dialogs/' + id} title={title} className={s.link} activeStyle={s.activeLink}/>
    </div>
  )
}

export default DialogItem