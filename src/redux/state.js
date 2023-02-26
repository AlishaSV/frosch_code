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
  subscribe (observer) {
    const stateObserver = () => {observer(this._state)}
    this._state.dialogsPage.messagesData.subscribe(stateObserver)
    this._state.profilePage.postsData.subscribe(stateObserver)
  },
  getState () {
    return this._state
  }
}

export default store
window.store = store