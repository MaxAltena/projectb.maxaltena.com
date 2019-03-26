import React from "react";

const Social = ({ linkTo, icon, iconType }) => {
  switch (iconType) {
    case "fontawesome-brand":
      return (
        <a href={linkTo} className="Social shake shake-slow-small">
          <i className={`fab fa-${icon}`} />
        </a>
      );
    case "material-icons":
    default:
      return (
        <a href={linkTo} className="Social shake shake-slow-small">
          <i className="material-icons">{icon}</i>
        </a>
      );
  }
};

export default Social;
