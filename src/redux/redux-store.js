import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import rootReducer from './root-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  root: rootReducer,
  usersPage: usersReducer,
  auth: authReducer
})
let store = createStore(reducers)

export default store