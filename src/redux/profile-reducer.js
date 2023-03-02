let ADD_POST = 'ADD-POST'
let DELETE_POST = 'DELETE-POST'
let CHANGE_POST_INPUT = 'CHANGE-POST-INPUT'

const profileReducer = (profilePage, action) => {
  switch (action.type) {
    case ADD_POST: {
      profilePage.postsData.addPost()
      break
    }
    case DELETE_POST: {
      profilePage.postsData.deletePostById(action.value)
      break
    }
    case CHANGE_POST_INPUT: {
      profilePage.postsData.changePostInput()
      break
    }
    default: {
      console.log('default case')
    }
  }
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