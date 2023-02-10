import React from 'react'
import s from './Navbar.module.css'
import NavbarLink from './NavbarLink'
import Sidebar from '../Sidebar/Sidebar'

function convertToComponents (linksArray) {

  let linksComponents = []
  for (const linksArrayElement of linksArray) {
    linksComponents.push(
      <NavbarLink key={`nav-${linksArrayElement}`} path={linksArrayElement}/>
    )
  }
  return linksComponents
}

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      {convertToComponents(props.links)}
      <Sidebar/>
    </nav>
  )
}

export default Navbar