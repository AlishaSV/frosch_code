import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'

const App = ({ state, dispatch }) => {
  const { profilePage, dialogsPage, root } = state
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root {...root}/>}>
          <Route path="dialogs/*"
                 element={
                   <DialogsContainer
                     {...dialogsPage}
                     dispatch={dispatch}
                   />
                 }
          />
          <Route path="profile/*"
                 element={
                   <Profile
                     {...profilePage}
                     dispatch={dispatch}
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
