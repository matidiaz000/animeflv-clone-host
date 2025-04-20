import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default AppRoutes;
