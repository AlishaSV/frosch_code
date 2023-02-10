import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'

const Dialogs = ({ dialogsData, messagesData }) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsData.map((dialog, index) => <DialogItem key={index} {...dialog}/>)}
      </div>
      <div className={s.messages}>
        {messagesData.map
        ((messages, index) => <Message key={index} {...messages}/>)}
      </div>
    </div>
  )
}

export default Dialogs