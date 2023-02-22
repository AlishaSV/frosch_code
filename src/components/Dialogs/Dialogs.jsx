import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'

const Dialogs = ({ dialogsData, messagesData }) => {
  let sendText = () => {
    alert(messagesData.messageInput)
    messagesData.changeMessageInput('')
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsData.map((dialog, index) => <DialogItem key={index} {...dialog}/>)}
      </div>
      <div className={s.messages}>
        {messagesData.messages.map
        ((messages, index) => <Message key={index} {...messages}/>)}
        <div className={s.text}>
          <textarea
            onChange={(event) => {
              messagesData.changeMessageInput(event.target.value)
            }}
            value={messagesData.messageInput}/>
          <div>
            <button onClick={sendText}>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs