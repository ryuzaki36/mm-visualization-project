import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "80px",
        justifyContent: "center",
        alignItems: "center",
        height:'65vh'
      }}
    >
      <div className="preloader">
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
      </div>
      <div className="status">
        <h2>Processing</h2>
        <span className="status__dot">.</span>
        <span className="status__dot">.</span>
        <span className="status__dot">.</span>
      </div>
    </main>
  );
};

export default Loader;
