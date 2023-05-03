import { posts } from './data'

export const initProfilePage = {
  postsData:
    {
      postInput: '',
      posts: posts,
      profile: {},
      status: ''
    }
}

export function addPost (postsData) {
  const newPostsData = { ...postsData }
  newPostsData.posts = [...postsData.posts]
  const { posts, postInput } = newPostsData

  let newPostId = 0
  if (posts.length >= 1) {
    const lastElementIndex = posts.length - 1
    newPostId = posts[lastElementIndex].id + 1
  }

  let newPost = { id: newPostId, message: postInput, likes: 0 }

  newPostsData.postInput = ''
  newPostsData.posts.push(newPost)

  return newPostsData
}

export const deletePostById = (id, postsData) => {
  const newPostsData = { ...postsData }
  newPostsData.posts = [...postsData.posts]
  let postIndex = newPostsData.posts.findIndex((post) => post.id === id)
  if (postIndex !== -1) {
    newPostsData.posts.splice(postIndex, 1)
  }
  return newPostsData
}

export function changePostInput (postInput, postsData) {
  const newPostsData = { ...postsData }
  newPostsData.postInput = postInput
  return newPostsData
}

export function setUserProfile (profile, postsData) {
  const newPostsData = { ...postsData }
  newPostsData.profile = profile
  return newPostsData
}

export function setStatus (status, postsData) {
  const newPostsData = { ...postsData }
  newPostsData.status = status
  return newPostsData
}
