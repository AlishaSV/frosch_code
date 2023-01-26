import React from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link to={'/profile'}>profile</Link>
      </div>
      <div className={s.item}>
        <Link to={'/dialogs'}>messages</Link>
      </div>
      <div className={s.item}>
        <Link to={'/news'}>news</Link>
      </div>
      <div className={s.item}>
        <Link to={'/music'}>music</Link>
      </div>
      <div className={s.item}>
        <Link to={'/settings'}>settings</Link>
      </div>
    </nav>
  )
}

export default Navbar