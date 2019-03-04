import React from "react";

const ScrollToTop = ({scroll, scrollHeight}) => {
  return (
    <i
      className={
        scrollHeight >= 25
          ? "material-icons scrollToTop shake shake-slow-small scrolled"
          : "material-icons scrollToTop shake shake-slow-small"
      }
      onClick={() => scroll.scrollToTop()}
    >
      keyboard_arrow_up
    </i>
  );
};

export default ScrollToTop;
