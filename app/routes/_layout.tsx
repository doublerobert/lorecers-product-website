import { Outlet } from "react-router";
import Footer from "~/components/layout/Footer";
import NavBar from "~/components/layout/NavBar";
import AppContextProvider from "~/lib/AppContextProvider";
import styles from "~/styles/AppLayout.module.css"

export default function Layout() {
  return (
    <AppContextProvider>
      <div className={styles.appLayout}>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </AppContextProvider>
  );
}
