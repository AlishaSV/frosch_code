import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message'
import DialogItem from './DialogItem/DialogItems'

const dialogsData = []

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem id={1} title={'Alina'}/>
        <DialogItem id={2} title={'Alex'}/>
        <DialogItem id={3} title={'Basil'}/>
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