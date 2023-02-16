import { reRenderEntireTree } from '../render'

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hello frog', likes: 20 },
      { id: 2, message: 'I posted this', likes: 15 },
    ]
  },
  dialogsPage: {
    dialogsData: [
      {
        id: 1,
        title: 'Alina',
        avatar: 'https://img.icons8.com/external-justicon-flat-justicon/512/external-cat-egypt-justicon-flat-justicon.png'
      },
      {
        id: 2,
        title: 'Alex',
        avatar: 'https://img.icons8.com/fluency/512/coder-in-hoodie.png'
      },
      {
        id: 3,
        title: 'Basil',
        avatar: 'https://img.icons8.com/external-filled-color-icons-papa-vector/512/external-Schefflera-allergens-filled-color-icons-papa-vector.png'
      },
      {
        id: 4,
        title: 'Sebastian',
        avatar: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-dracaena-plants-flaticons-lineal-color-flat-icons.png'
      },
    ],
    messagesData: [
      {
        id: 1,
        message: 'Hi',
        avatar: 'https://img.icons8.com/external-justicon-flat-justicon/512/external-cat-egypt-justicon-flat-justicon.png'
      },
      {
        id: 2,
        message: 'You are frog',
        avatar: 'https://img.icons8.com/fluency/512/coder-in-hoodie.png'
      },
      {
        id: 3,
        message: 'Water me please',
        avatar: 'https://img.icons8.com/external-filled-color-icons-papa-vector/512/external-Schefflera-allergens-filled-color-icons-papa-vector.png'
      },
    ]
  },
  root: {
    navBar: {
      friends:
        [
          {
            id: 1,
            name: 'Alex',
            avatar: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
          },
          {
            id: 1,
            name: 'Alex',
            avatar: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
          },
          {
            id: 1,
            name: 'Alex',
            avatar: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
          }
        ]
    }
  }
}

export const addPost = (postMessage) => {
  const posts = state.profilePage.postsData
  let newPostId = 0
  if (posts.length >= 1) {
    const lastElementIndex = posts.length - 1
    newPostId = posts[lastElementIndex].id + 1
  }
  let newPost = { id: newPostId, message: postMessage, likes: 0 }
  state.profilePage.postsData.push(newPost)
  reRenderEntireTree()
}

export const deletePostById = (id) => {
  
  let postIndex = state.profilePage.postsData.findIndex((post) => post.id === id)
  if (postIndex !== -1) {
    state.profilePage.postsData.splice(postIndex, 1)
    reRenderEntireTree()
  }
}

export default state