import React from "react";

const Social = ({ linkTo, icon }) => {
  return (
    <a href={linkTo} className="Social shake shake-slow-small">
      <i className="material-icons">{icon}</i>
    </a>
  );
};

export default Social;
