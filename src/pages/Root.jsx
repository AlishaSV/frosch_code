import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'
import NavbarContainer from '../components/Navbar/NavbarContainer'
import HeaderContainer from '../components/Header/HeaderContainer'

function Root () {
  let links = ['Profile', 'Dialogs', 'News', 'Users', 'Music', 'Settings']

  return (
    <div className={styles.appWrapper}>
      <HeaderContainer/>
      <NavbarContainer links={links}/>
      <div className={styles.appWrapperContent}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Root