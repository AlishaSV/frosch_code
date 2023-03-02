import { friends } from './friends'

const initSate = {
  navBar: {
    friends: friends
  }
}

const rootReducer = (state = initSate, action) => {
  return state
}
export default rootReducer
