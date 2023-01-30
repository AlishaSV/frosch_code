import { NavLink as DefaultNavLink } from 'react-router-dom'

// NavbarLink is a component that renders one NavbarLink, which depends on props(path)
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