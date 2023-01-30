import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

// NavbarLink is a component that renders one NavbarLink, which depends on props(path)
const NavbarLink = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={props.path} className={({ isActive }) => isActive ? s.activeStyle : undefined}>
        {props.path}
      </NavLink>
    </div>
  )
}

export default NavbarLink