import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'

const Dialogs = ({ dialogsData, messagesData, changeMessageInput, sendMessage, isAuth }) => {

  return !isAuth ? null : (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsData.map((dialog, index) => <DialogItem key={index} {...dialog}/>)}
    </div>
    <div className={s.messages}>
      {messagesData.messages.map((messages, index) => <Message key={index} {...messages}/>)}
      <div className={s.text}>
          <textarea
            onChange={(event) => {
              changeMessageInput(event.target.value)
            }}
            value={messagesData.messageInput}/>
        <div>
          <button onClick={() => {sendMessage()}}>send</button>
        </div>
      </div>
    </div>
  </div>)
}

export default Dialogs