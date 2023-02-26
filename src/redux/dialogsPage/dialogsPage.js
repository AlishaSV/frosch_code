import { dialogsData, messages } from './data'

export const dialogsPage = {
  dialogsData: dialogsData,
  messagesData: {
    _callSubscriber: () => {},
    subscribe (observer) {
      this._callSubscriber = observer
    },
    messageInput: '',
    messages: messages,
    changeMessageInput: function (messageInput) {
      this.messageInput = messageInput
      this._callSubscriber()
    }
  }
}