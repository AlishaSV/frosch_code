import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>
          Alina
        </div>
        <div className={s.dialog}>
          Alex
        </div>
        <div className={s.dialog}>
          Basil
        </div>
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