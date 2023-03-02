import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {
  addPostActionCreator,
  changePostInputActionCreator,
  deletePostByIdActionCreator,
} from './redux/profile-reducer'
import { changeMessageInputActionCreator, sendMessageActionCreator } from './redux/dialogs-reducer'

const App = ({ state, dispatch }) => {
  const { profilePage, dialogsPage, root } = state
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root {...root}/>}>
          <Route path="dialogs/*"
                 element={
                   <Dialogs
                     {...dialogsPage}
                     changeMessageInput={(messageInput) => {
                       dispatch(changeMessageInputActionCreator(messageInput))
                     }}
                     {...dialogsPage}
                     sendMessage={() => {
                       dispatch(sendMessageActionCreator())
                     }}
                   />
                 }
          />
          <Route path="profile/*"
                 element={
                   <Profile
                     {...profilePage}
                     changePostInput={(postInput) => {
                       dispatch(changePostInputActionCreator(postInput))
                     }}
                     addPost={() => {
                       dispatch(addPostActionCreator())
                     }}
                     deletePostById={(id) => {
                       dispatch(deletePostByIdActionCreator(id))
                     }}
                   />
                 }
          />
          <Route path="news/*" element={<News/>}/>
          <Route path="music/*" element={<Music/>}/>
          <Route path="settings/*" element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
