import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { dialogsData, messagesData } from './data/Dialogs'
import { postsData } from './data/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route path="dialogs/*" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
          <Route path="profile/*" element={<Profile postsData={postsData}/>}/>
          <Route path="news/*" element={<News/>}/>
          <Route path="music/*" element={<Music/>}/>
          <Route path="settings/*" element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
