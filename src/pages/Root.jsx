import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

function Root ({ navBar }) {
  let links = ['Profile', 'Dialogs', 'News', 'Music', 'Settings']

  return (
    <div className={styles.appWrapper}>
      <Header/>
      <Navbar links={links} {...navBar}/>
      <div className={styles.appWrapperContent}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Root