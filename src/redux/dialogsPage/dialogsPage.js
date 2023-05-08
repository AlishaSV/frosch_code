import { dialogsData, messages } from './data'

export const dialogsPage = {
  dialogsData: dialogsData,
  messagesData: {
    messageInput: '',
    messages: messages,
  }
}

export function changeMessageInput (messageInput, messagesData) {
  const newMessagesData = { ...messagesData }
  newMessagesData.messageInput = messageInput
  return newMessagesData
}

export function sendMessage (messageInput, messagesData) {
  const newMessagesData = { ...messagesData }
  newMessagesData.messages = [...messagesData.messages]
  const { messages } = newMessagesData

  let newMessageId = 0
  if (messages.length >= 1) {
    const lastElementIndex = messages.length - 1
    newMessageId = messages[lastElementIndex].id + 1
  }

  let newMessage = {
    id: newMessageId,
    message: messageInput,
    avatar: 'https://img.icons8.com/?size=512&id=81139&format=png'
  }

  newMessagesData.messageInput = ''
  newMessagesData.messages.push(newMessage)
  return newMessagesData
}