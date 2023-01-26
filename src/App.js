import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Profile from './components/Profile/Profile'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Root/>}>
        <Route path="dialogs" element={<Dialogs/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>
  )
}

export default App
