import profileReducer, { addPostActionCreator, deletePostByIdActionCreator } from './profile-reducer'
import React from 'react'

jest.mock('axios')

let state = {
  postsData: {
    posts:
      [
        { id: 1, message: 'Hello frog', likes: 20 },
        { id: 2, message: 'I posted this', likes: 15 }
      ]
  }
}

test('length of posts should be incremented', () => {

  let action = addPostActionCreator('hello')
  let newState = profileReducer(state, action)
  expect(newState.postsData.posts.length).toBe(3)
})

test('text message should be correct', () => {

  let action = addPostActionCreator('hi')
  let newState = profileReducer(state, action)
  expect(newState.postsData.posts[2].message).toBe('hi')
})

test('after deleting length should not be decremented if id is incorrect', () => {

  let action = deletePostByIdActionCreator(123)
  let newState = profileReducer(state, action)
  expect(newState.postsData.posts.length).toBe(2)
})

