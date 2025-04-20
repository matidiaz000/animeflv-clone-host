import { useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <h1>Página no encontrada</h1>
      <p>
        La URL ingresada <strong>{pathname}</strong> no se encuentra disponible.
      </p>
    </div>
  );
}
