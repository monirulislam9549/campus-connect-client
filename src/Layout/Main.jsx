import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const headerFooterLess =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div className="">
      {!headerFooterLess && <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </div>
      {!headerFooterLess && <Footer></Footer>}
    </div>
  );
};

export default Main;
