import React from "react";

const MajorLoading = () => {
  return (
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
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <h5 style={{ margin: "0 0 50px 0" }}>Laden...</h5>
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </div>
    </div>
  );
};

export default MajorLoading;
