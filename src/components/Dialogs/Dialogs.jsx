import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'
import MessageForm from './MessageForm'

const Dialogs = ({ dialogsData, messagesData, sendMessage, isAuth }) => {

  return !isAuth ? null : (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsData.map((dialog, index) => <DialogItem key={index} {...dialog}/>)}
    </div>
    <div className={s.messages}>
      {messagesData.messages.map((messages, index) => <Message key={index} {...messages}/>)}
      <div className={s.text}>
        <MessageForm sendMessage={sendMessage}/>
      </div>
    </div>
  </div>)
}

export default Dialogs