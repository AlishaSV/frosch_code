import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt={'header'}
           src="https://thumbs.dreamstime.com/b/illustration-de-g%C3%A2teau-macaron-d-aquarelle-isolement-sur-le-fond-blanc-dessin-color%C3%A9-fran%C3%A7ais-doux-p%C3%A2tisserie-153180154.jpg"/>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header