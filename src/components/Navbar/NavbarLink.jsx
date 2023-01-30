import NavLink from '../NavLink'
import s from './Navbar.module.css'

const NavbarLink = (props) => {
  return (
    <NavLink path={props.path} className={s.item} activeStyle={s.activeStyle}/>
  )
}

export default NavbarLink