import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="m-0">Copyright @ 2024 AnimeFLV, All rights reserved.</p>
        <nav className="d-flex align-items-center me-n2">
          <NavLink to="#" className="mx-2 text-white">Terminos y condiciones</NavLink>
          <NavLink to="#" className="mx-2 text-white">Política de privacidad</NavLink>
        </nav>
      </div>
    </footer>
  )
}