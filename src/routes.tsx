import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";

const Home = lazy(() => import("home"));
const Animes = lazy(() => import("animes"));
const Chapter = lazy(() => import("chapter"));

const AppRoutes = () => {
  return (
    <ErrorBoundary fallback={<div>Error loading microfrontend</div>}>
      <Routes>
        <Route index element={<Navigate to="/inicio" />} />
        <Route element={<Home />} path="/inicio/*" />
        <Route element={<Animes />} path="/buscar/*" />
        <Route element={<Chapter />} path="/anime/*" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
