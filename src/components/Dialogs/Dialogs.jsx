import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'

const Dialogs = () => {
  const dialogsData = [
    { id: 1, title: 'Alina' },
    { id: 2, title: 'Alex' },
    { id: 3, title: 'Basil' },
  ]

  const messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'You are frog' },
    { id: 3, message: 'Water me please' },
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsData.map((dialog) => <DialogItem id={dialog.id} title={dialog.title}/>)}
      </div>
      <div className={s.messages}>
        {messagesData.map
        ((messages) => <Message id={messages.id} message={messages.message}/>)}
      </div>
    </div>
  )
}

export default Dialogs