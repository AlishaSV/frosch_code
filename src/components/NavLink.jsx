import { NavLink as DefaultNavLink } from 'react-router-dom'
import React from 'react'

const NavLink = ({ title, path, className, activeStyle }) => {

  return (
    <div className={className}>
      <DefaultNavLink to={path} className={({ isActive }) => isActive ? activeStyle : className}>
        {title ?? path}
      </DefaultNavLink>
    </div>
  )
}

export default NavLink