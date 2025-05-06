import { Icon } from "@matidiaz000/animeflv-clone-library"
import { NavLink } from "react-router-dom"
import AnimeFLVLogo from './assets/logo.png'

export const Header = () => {
  return (
    <header className="bg-dark">
      <div className="container-md py-3 py-md-4">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <img src={AnimeFLVLogo} alt="AnimeFLV" />
          </NavLink>
          <nav className="d-flex align-items-center ms-md-3 ms-auto">
            <NavLink
              className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
              to="#"
            >Noticias</NavLink>
            <NavLink
              className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
              to="#"
            >Explorar</NavLink>
          </nav>
          <nav className="ms-auto d-none d-md-flex align-items-center me-n3">
            <div className="d-none d-md-flex">
              <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`} to="#">
                <Icon icon="Search_Magnifying_Glass"/>
              </NavLink>
              <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`} to="#">
                <Icon icon="Bookmark"/>
              </NavLink>
              <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`} to="#">
                <Icon icon="User_Circle"/>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}