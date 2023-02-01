import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message'
import DialogItem from './DialogItem/DialogItems'

const dialogsData = []

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem id={1} title={'Alina'}/>
        <DialogItem id={2} title={'Alex'}/>
        <DialogItem id={3} title={'Basil'}/>
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