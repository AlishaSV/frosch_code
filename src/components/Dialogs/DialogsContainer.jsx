import React from 'react'
import { changeMessageInputActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = ({ dialogsData, messagesData, dispatch }) => {

  const changeMessageInput = (messageInput) => {
    dispatch(changeMessageInputActionCreator(messageInput))
  }

  const sendMessage = () => {
    dispatch(sendMessageActionCreator())
  }

  return (
    <Dialogs dialogsData={dialogsData} messagesData={messagesData} sendMessage={sendMessage}
             changeMessageInput={changeMessageInput}/>
  )
}

export default DialogsContainer