import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("home"));
const Animes = lazy(() => import("animes"));
const Chapter = lazy(() => import("chapter"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} path="/" />
      <Route element={<Animes />} path="/browse/*" />
      <Route element={<Chapter />} path="/chapter/*" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default AppRoutes;
