import { changeMessageInput, dialogsPage as initDialogsPage, sendMessage } from './dialogsPage/dialogsPage'

let CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT'
let SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (dialogsPage = initDialogsPage, action) => {
  let dialogsPageCopy = { ...dialogsPage }
  const { messagesData } = dialogsPage
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT: {
      dialogsPageCopy.messagesData = changeMessageInput(action.value, messagesData)
      break
    }
    case SEND_MESSAGE: {
      dialogsPageCopy.messagesData = sendMessage(messagesData)
      break
    }
    default: {
      break
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