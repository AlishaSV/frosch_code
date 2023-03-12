import { addPost, changePostInput, deletePostById, initProfilePage } from './profilePage/initProfilePage'

let ADD_POST = 'ADD-POST'
let DELETE_POST = 'DELETE-POST'
let CHANGE_POST_INPUT = 'CHANGE-POST-INPUT'

const profileReducer = (profilePage = initProfilePage, action) => {
  const newProfilePage = { ...profilePage }
  switch (action.type) {
    case ADD_POST: {
      newProfilePage.postsData = addPost(profilePage.postsData)
      break
    }
    case DELETE_POST: {
      newProfilePage.postsData = deletePostById(action.value, profilePage.postsData)
      break
    }
    case CHANGE_POST_INPUT: {
      newProfilePage.postsData = changePostInput(action.value, profilePage.postsData)
      break
    }
    default: {
      console.log('default case')
    }
  }

  return newProfilePage
}

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

export default profileReducer