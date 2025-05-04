import { Icon } from "@matidiaz000/animeflv-clone-library";
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  return (
    <nav className="container-fluid bg-dark d-flex justify-content-between align-items-center position-fixed bottom-0 w-100 d-md-none">
      <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover w-100 text-center`} to="/">
          <Icon icon="Devices"/>
      </NavLink>
      <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover w-100 text-center`} to="#">
          <Icon icon="Search_Magnifying_Glass"/>
      </NavLink>
      <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover w-100 text-center`} to="#">
          <Icon icon="Bookmark"/>
      </NavLink>
      <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover w-100 text-center`} to="#">
          <Icon icon="User_Circle"/>
      </NavLink>
    </nav>
  );
};

export default NavMobile;
