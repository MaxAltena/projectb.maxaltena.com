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
      <div style={{ width: "100%", maxWidth: "250px", margin: "0 20px" }}>
        <h6 style={{ margin: "0 0 25px 0" }}>Laden...</h6>
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
