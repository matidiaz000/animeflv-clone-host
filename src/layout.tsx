import { Header, Icon } from "@matidiaz000/animeflv-clone-library";
import AnimeFLVLogo from './assets/logo.png'
import { NavLink, useLocation } from "react-router-dom";
import NavMobile from "./components/NavMobile";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { pathname } = useLocation();

  return (
    <div className={`pb-5 pb-md-0 page-${pathname.split("/")[1]}`}>
      <Header
        logo={AnimeFLVLogo}
        leftContent={
          <>
            <NavLink
              className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
              to="#"
            >Noticias</NavLink>
            <NavLink
              className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
              to="#"
            >Explorar</NavLink>
          </>
        }
        rightContent={
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
        }
      />
      <div>
        {children}
      </div>
      <div className="bg-dark text-white py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="m-0">Copyright @ 2024 AnimeFLV, All rights reserved.</p>
          <nav className="d-flex align-items-center me-n2">
            <NavLink to="#" className="mx-2 text-white">Terminos y condiciones</NavLink>
            <NavLink to="#" className="mx-2 text-white">Política de privacidad</NavLink>
          </nav>
        </div>
      </div>
      <NavMobile />
    </div>
  );
};

export default Layout;
