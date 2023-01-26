import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

function Root () {
  return (
    <div className={styles.appWrapper}>
      <Header/>
      <Navbar/>
      <div className={styles.appWrapperContent}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Root