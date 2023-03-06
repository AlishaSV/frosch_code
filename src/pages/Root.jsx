import Header from '../components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'
import Navbar from '../components/Navbar/Navbar'
import StoreContext from '../StoreContext'

function Root () {
  let links = ['Profile', 'Dialogs', 'News', 'Music', 'Settings']

  return (
    <div className={styles.appWrapper}>
      <Header/>
      <StoreContext.Consumer>
        {
          (store) => {
            const { getState } = store

            const { root } = getState()

            return (
              <Navbar links={links} {...root.navBar}/>
            )
          }
        }
      </StoreContext.Consumer>
      <div className={styles.appWrapperContent}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Root