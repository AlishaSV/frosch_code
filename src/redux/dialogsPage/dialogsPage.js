import { dialogsData, messages } from './data'

export const dialogsPage = {
  dialogsData: dialogsData,
  messagesData: {
    messageInput: '',
    messages: messages,
    sendMessage: function () {
      this.messages.push({ id: 4, message: this.messageInput, avatar: '' })
      this.messageInput = ''
    }
  }
}

export function changeMessageInput (messageInput, messagesData) {
  const newMessagesData = { ...messagesData }
  newMessagesData.messageInput = messageInput
  return newMessagesData
}

export function sendMessage (messagesData) {
  const newMessagesData = { ...messagesData }
  newMessagesData.messages.push({ id: 4, message: newMessagesData.messageInput, avatar: '' })
  newMessagesData.messageInput = ''
  return newMessagesData
}