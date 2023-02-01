import React from 'react'
import NavLink from '../../NavLink'
import s from './DialogItem.module.css'

const DialogItem = ({ id, title }) => {
  return (
    <NavLink path={`/dialogs/${id}`} title={title} className={s.item} activeStyle={s.activeItem}/>
  )
}

export default DialogItem