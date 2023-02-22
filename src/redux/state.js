let reRenderEntireTree = () => {}

export const setReRenderEntireTree = (customReRenderEntireTree) => {
  reRenderEntireTree = customReRenderEntireTree
}

const profilePage = {
  postsData:
    {
      postInput: '',
      posts:
        [
          { id: 1, message: 'Hello frog', likes: 20 },
          { id: 2, message: 'I posted this', likes: 15 },
        ],
      addPost: function () {
        let newPostId = 0
        if (this.posts.length >= 1) {
          const lastElementIndex = this.posts.length - 1
          newPostId = this.posts[lastElementIndex].id + 1
        }
        let newPost = { id: newPostId, message: this.postInput, likes: 0 }
        this.postInput = ''
        this.posts.push(newPost)
        reRenderEntireTree()
      },
      deletePostById: function (id) {
        let postIndex = this.posts.findIndex((post) => post.id === id)
        if (postIndex !== -1) {
          this.posts.splice(postIndex, 1)
          reRenderEntireTree()
        }
      },
      changePostInput: function (postInput) {
        this.postInput = postInput
        reRenderEntireTree()
      }
    },
}

const dialogsPage = {
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
  messagesData: {
    messageInput: '',
    messages:
      [
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
      ],
    changeMessageInput: function (messageInput) {
      this.messageInput = messageInput
      reRenderEntireTree()
    }
  }

}

let state = {
  profilePage: profilePage,
  dialogsPage: dialogsPage,
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

export default state