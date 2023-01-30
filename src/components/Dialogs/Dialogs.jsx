import React from 'react'
import s from './Dialogs.module.css'
import NavLink from '../NavLink'

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <NavLink path={'/dialogs/1'} title={'Alina'} className={s.dialog} activeStyle={s.active}/>
        <NavLink path={'/dialogs/2'} title={'Alex'} className={s.dialog} activeStyle={s.active}/>
        <NavLink path={'/dialogs/3'} title={'Basil'} className={s.dialog} activeStyle={s.active}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hi'}/>
        <Message message={'You are frog'}/>
        <Message message={'Water me please'}/>
      </div>
    </div>
  )
}

export default Dialogs