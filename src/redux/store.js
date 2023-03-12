import { friends } from './friends'
import { initProfilePage } from './profilePage/initProfilePage'
import { dialogsPage } from './dialogsPage/dialogsPage'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import rootReducer from './root-reducer'

let store = {
  _state: {
    profilePage: initProfilePage,
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

    profileReducer(this._state.profilePage, action)
    dialogsReducer(this._state.dialogsPage, action)
    rootReducer(this._state.root, action)

    this._callSubscriber()
  }
}

export default store
window.store = store