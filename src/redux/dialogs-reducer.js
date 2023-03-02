let CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT'
let SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (dialogsPage, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT: {
      dialogsPage.messagesData.changeMessageInput(action.value)
      break
    }
    case SEND_MESSAGE: {
      dialogsPage.messagesData.sendMessage()
      break
    }
    default: {
      console.log('default case')
    }
  }
}

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
})

export const changeMessageInputActionCreator = (messageInput) => ({
  type: CHANGE_MESSAGE_INPUT,
  value: messageInput
})

export default dialogsReducer