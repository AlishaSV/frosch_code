import { posts } from './data'

export const profilePage = {
  postsData:
    {
      _callSubscriber: () => {},
      subscribe (observer) {
        this._callSubscriber = observer
      },
      postInput: '',
      posts: posts,
      addPost: function () {
        let newPostId = 0
        if (this.posts.length >= 1) {
          const lastElementIndex = this.posts.length - 1
          newPostId = this.posts[lastElementIndex].id + 1
        }
        let newPost = { id: newPostId, message: this.postInput, likes: 0 }
        this.postInput = ''
        this.posts.push(newPost)
        this._callSubscriber()
      },
      deletePostById: function (id) {
        let postIndex = this.posts.findIndex((post) => post.id === id)
        if (postIndex !== -1) {
          this.posts.splice(postIndex, 1)
        }
        this._callSubscriber()
      },
      changePostInput: function (postInput) {
        this.postInput = postInput
        this._callSubscriber()
      }
    },
}
