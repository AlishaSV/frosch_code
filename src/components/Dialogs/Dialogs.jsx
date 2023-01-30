import React from 'react'
import s from './Dialogs.module.css'
import NavLink from '../NavLink'
import Message from './Message'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <NavLink path={'/dialogs/1'} title={'Alina'} className={s.dialog} activeStyle={s.active}/>
        <NavLink path={'/dialogs/2'} title={'Alex'} className={s.dialog} activeStyle={s.active}/>
        <NavLink path={'/dialogs/3'} title={'Basil'} className={s.dialog} activeStyle={s.active}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hi'} className={s.message}/>
        <Message message={'You are frog'} className={s.message}/>
        <Message message={'Water me please'} className={s.message}/>
      </div>
    </div>
  )
}

export default Dialogs