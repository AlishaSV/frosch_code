import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'

const Dialogs = ({ dialogsData, messagesData }) => {

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