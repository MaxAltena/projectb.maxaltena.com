import React, { Component } from "react";

class RedirectingDrive extends Component {
  render() {
    setTimeout(
      () =>
        (window.location =
          "https://drive.google.com/open?id=13KIHMT8Ha8IxsnSJLqduk32A-48Cw4VT"),
      750
    );

    return (
      <div className="Redirecting">
        <p>
          Redirecting you to{" "}
          <a href="https://drive.google.com/open?id=13KIHMT8Ha8IxsnSJLqduk32A-48Cw4VT">
            https://drive.google.com/open?id=13KIHMT8Ha8IxsnSJLqduk32A-48Cw4VT
          </a>
        </p>
      </div>
    );
  }
}

export default RedirectingDrive;
