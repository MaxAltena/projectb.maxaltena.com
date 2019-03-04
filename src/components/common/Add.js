import React from "react";

const Add = ({ history }) => {
  return (
    <i
      className="material-icons add shake shake-slow-small"
      onClick={() => history.push("/create")}
    >
      add
    </i>
  );
};

export default Add;
