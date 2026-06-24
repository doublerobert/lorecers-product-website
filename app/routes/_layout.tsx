import { Outlet } from "react-router";
import Footer from "~/components/layout/Footer";
import NavBar from "~/components/layout/NavBar";
import AppContextProvider from "~/lib/AppContextProvider";

export default function Layout() {
  return (
    <AppContextProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </AppContextProvider>
  );
}
