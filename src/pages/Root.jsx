import Header from '../components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'
import NavbarContainer from '../components/Navbar/NavbarContainer'

function Root () {
  let links = ['Profile', 'Dialogs', 'News', 'Music', 'Settings']

  return (
    <div className={styles.appWrapper}>
      <Header/>
      <NavbarContainer links={links}/>
      <div className={styles.appWrapperContent}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Root