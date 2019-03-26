import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        height: "250px",
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
          maxWidth: "250px",
          padding: "0 10px"
        }}
      >
        <h6 style={{ margin: "0 0 25px 0" }}>Laden...</h6>
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
