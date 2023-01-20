import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <a href={"/profile"}>profile</a>
        </div>
        <div className={s.item}>
          <a href={"/messages"}>messages</a>
        </div>
        <div className={s.item}>
          <a href={"/news"}>news</a>
        </div>
        <div className={s.item}>
          <a href={"/music"}>music</a>
        </div>
        <div className={s.item}>
          <a href={"/settings"}>settings</a>
        </div>
        </nav>
    )
}

export default Navbar;