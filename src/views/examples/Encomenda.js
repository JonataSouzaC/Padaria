import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HeaderEncomenda from "components/Headers/HeaderEncomenda.js";
import DarkFooter from "components/Footers/DarkFooter.js";


import Examples from "../index-sections/Examples.js";


function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>  
      
      <IndexNavbar />
      <div className="wrapper">
        <HeaderEncomenda />
        <div className="main">
          <Examples />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
