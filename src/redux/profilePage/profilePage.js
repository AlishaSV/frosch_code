import { posts } from './data'

export const profilePage = {
  postsData:
    {
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
      },
      deletePostById: function (id) {
        let postIndex = this.posts.findIndex((post) => post.id === id)
        if (postIndex !== -1) {
          this.posts.splice(postIndex, 1)
        }
      },
      changePostInput: function (postInput) {
        this.postInput = postInput
      }
    },
}
