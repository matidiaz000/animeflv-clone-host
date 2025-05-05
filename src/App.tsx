import { useLocation } from "react-router-dom";
import Layout from "./layout";
import AppRoutes from "./routes";
import { useLayoutEffect } from "react";

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
