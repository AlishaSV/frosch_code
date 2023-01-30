import React from 'react'
import s from './Dialogs.module.css'
import NavLink from '../NavLink'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <NavLink path={'/dialogs/1'} title={'Alina'} className={s.dialog} activeStyle={s.active}/>
        <NavLink path={'/dialogs/2'} title={'Alex'} className={s.dialog} activeStyle={s.active}/>
        <NavLink path={'/dialogs/3'} title={'Basil'} className={s.dialog} activeStyle={s.active}/>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>You are frog</div>
        <div className={s.message}>Water me please</div>
      </div>
    </div>
  )
}

export default Dialogs