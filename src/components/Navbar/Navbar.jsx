import React from 'react'
import s from './Navbar.module.css'
import NavbarLink from './NavbarLink'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = ({ friends, links }) => {
  return (
    <div className={s.nav}>
      <nav>
        {links.map((link, index) => <NavbarLink key={`nav-${index}`} path={link}/>)}
      </nav>
      <Sidebar friends={friends}/>
    </div>
  )
}

export default Navbar