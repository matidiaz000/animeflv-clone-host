import { useLocation } from "react-router-dom";
import NavMobile from "./components/NavMobile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { pathname } = useLocation();

  return (
    <div className={`pb-5 pb-md-0 page-${pathname.split("/")[1]}`}>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
      <NavMobile />
    </div>
  );
};

export default Layout;
