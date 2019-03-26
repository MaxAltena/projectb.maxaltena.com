import React from "react";
import Header from "../Header/Header";

const MajorLoading = () => {
  return (
    <div className="MajorLoading">
      <Header cN="hide-on-med-and-down" type="a" />
      <Header cN="hide-on-large-only" type="a" />
      <div
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
        className="center"
      >
        <div
          style={{
            width: "calc(100% - 20px)",
            maxWidth: "500px",
            padding: "0 10px"
          }}
        >
          <h5 style={{ margin: "0 0 50px 0" }}>Laden...</h5>
          <div className="progress">
            <div className="indeterminate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorLoading;
