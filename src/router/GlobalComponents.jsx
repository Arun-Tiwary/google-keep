import React from "react";
import { useOutlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const GlobalComponents = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      <SideBar />
      <div className="">{outlet}</div>
      <div className="flex flex-row"></div>

      <Footer />
    </>
  );
};

export default GlobalComponents;
