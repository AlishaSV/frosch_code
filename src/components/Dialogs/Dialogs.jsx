import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message'
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
        <DialogItem id={dialogsData[0].id} title={dialogsData[0].title}/>
        <DialogItem id={dialogsData[1].id} title={dialogsData[1].title}/>
        <DialogItem id={dialogsData[2].id} title={dialogsData[2].title}/>
      </div>
      <div className={s.messages}>
        <Message id={messagesData[0].id} message={messagesData[0].message}/>
        <Message id={messagesData[1].id} message={messagesData[1].message}/>
        <Message id={messagesData[2].id} message={messagesData[2].message}/>
      </div>
    </div>
  )
}

export default Dialogs