import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}
