import { dialogsData, messages } from './data'

export const dialogsPage = {
  dialogsData: dialogsData,
  messagesData: {
    messageInput: '',
    messages: messages,
    changeMessageInput: function (messageInput) {
      this.messageInput = messageInput
    },
    sendMessage: function () {
      this.messages.push({ id: 4, message: this.messageInput, avatar: '' })
      this.messageInput = ''
    }
  }
}