import React from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import './index.css'

const Main = ({ children }) => {
  return <div>{children}</div>;
};

export const Layout = ({ children }) => {
  return (
    <div >
      <Navbar />
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
};
