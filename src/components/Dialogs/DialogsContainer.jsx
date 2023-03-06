import React from 'react'
import { changeMessageInputActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const { dispatch, getState } = store

          const { dialogsPage } = getState()

          const changeMessageInput = (messageInput) => {
            dispatch(changeMessageInputActionCreator(messageInput))
          }
          const sendMessage = () => {
            dispatch(sendMessageActionCreator())
          }
          return <Dialogs dialogsData={dialogsPage.dialogsData} messagesData={dialogsPage.messagesData}
                          sendMessage={sendMessage}
                          changeMessageInput={changeMessageInput}/>
        }
      }
    </StoreContext.Consumer>
  )

}

export default DialogsContainer