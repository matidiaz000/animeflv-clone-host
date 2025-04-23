import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("home"));
const Animes = lazy(() => import("animes"));
const Chapter = lazy(() => import("chapter"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Animes />} path="buscar/*" />
      <Route element={<Chapter />} path="anime/*" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default AppRoutes;
