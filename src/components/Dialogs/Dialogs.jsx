import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItems'

const Dialogs = ({ dialogsData, messagesData }) => {
  let newPostElement = React.createRef()
  let sendText = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsData.map((dialog, index) => <DialogItem key={index} {...dialog}/>)}
      </div>
      <div className={s.messages}>
        {messagesData.map
        ((messages, index) => <Message key={index} {...messages}/>)}
        <div className={s.text}>
          <textarea ref={newPostElement}></textarea>
          <div>
            <button onClick={sendText}>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs