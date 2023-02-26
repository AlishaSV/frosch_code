import { friends } from './friends'
import { profilePage } from './profilePage/profilePage'
import { dialogsPage } from './dialogsPage/dialogsPage'

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
  // action = {type:"", value:""}
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