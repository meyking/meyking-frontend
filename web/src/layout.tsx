import React from "react"
import Navbar from "./components/Navbar";
import './index.css'

const Main = ({ children }) => {
  return <div>{children}</div>;
};

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
};
