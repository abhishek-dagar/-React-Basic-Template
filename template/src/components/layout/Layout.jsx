import { Navbar, Footer } from "components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* NavBar */}
      <Navbar />
      {/* NavBar */}
      {/* Pages */}
      <Outlet />
      {/* Pages */}
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
};

export default Layout;
