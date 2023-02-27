import { friends } from './friends'
import { profilePage } from './profilePage/profilePage'
import { dialogsPage } from './dialogsPage/dialogsPage'

let ADD_POST = 'ADD-POST'
let DELETE_POST = 'DELETE-POST'
let CHANGE_POST_INPUT = 'CHANGE-POST-INPUT'
let CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT'

export const addPostActionCreator = () => ({ type: ADD_POST })

export const deletePostByIdActionCreator = (id) =>
  ({
    type: DELETE_POST,
    value: id
  })

export const changePostInputActionCreator = (postInput) => ({
  type: CHANGE_POST_INPUT,
  value: postInput
})

export const changeMessageInputActionCreator = (messageInput) => ({
  type: CHANGE_MESSAGE_INPUT,
  value: messageInput
})

let store = {
  _state: {
    profilePage: profilePage,
    dialogsPage: dialogsPage,
    root: {
      navBar: {
        friends: friends
      }
    },
  },
  _callSubscriber: () => {},
  subscribe (observer) {
    this._callSubscriber = () => {observer(this)}
  },
  getState () {
    return this._state
  },
  dispatch (action) {
    switch (action.type) {
      case 'ADD-POST': {
        this._state.profilePage.postsData.addPost()
        break
      }
      case 'DELETE-POST': {
        this._state.profilePage.postsData.deletePostById(action.value)
        break
      }
      case 'CHANGE-MESSAGE-INPUT': {
        this._state.dialogsPage.messagesData.changeMessageInput(action.value)
        break
      }
      case 'CHANGE-POST-INPUT': {
        this._state.profilePage.postsData.changePostInput(action.value)
        break
      }
      default: {
        console.log('default case')
      }
    }
    this._callSubscriber()
  }
}

export default store
window.store = store