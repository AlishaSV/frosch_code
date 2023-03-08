import { dialogsPage as initDialogsPage } from './dialogsPage/dialogsPage'

let CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT'
let SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (dialogsPage = initDialogsPage, action) => {
  let dialogsPageCopy = { ...dialogsPage }
  const { messagesData } = dialogsPage
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT: {
      dialogsPageCopy.messagesData = messagesData.changeMessageInput(action.value)
      break
    }
    case SEND_MESSAGE: {
      dialogsPage.messagesData = messagesData.sendMessage()
      break
    }
    default: {
      console.log('default case')
    }
  }
  return dialogsPageCopy
}

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
})

export const changeMessageInputActionCreator = (messageInput) => ({
  type: CHANGE_MESSAGE_INPUT,
  value: messageInput
})

export default dialogsReducer