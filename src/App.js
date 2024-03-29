import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginContainer from './components/Login/LoginContainer'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route path="dialogs/*"
                 element={
                   <DialogsContainer/>
                 }
          />
          <Route path="profile/:userId?/*"
                 element={
                   <ProfileContainer/>
                 }
          />
          <Route path="users/*"
                 element={
                   <UsersContainer/>
                 }
          />
          <Route path="login/*"
                 element={
                   <LoginContainer/>
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
