import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="container">
  <main className="wrapper" {...props} />
  </div>)
}

export default Wrapper;
