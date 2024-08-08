import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
  return (
    <AuthProvider>
      <Nav />

      <div className="h-screen">
        <Outlet />
      </div>

      <Footer />
    </AuthProvider>
  );
};
export default Layout;
