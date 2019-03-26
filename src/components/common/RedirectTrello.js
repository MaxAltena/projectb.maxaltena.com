import React, { Component } from "react";

class RedirectingTrello extends Component {
  render() {
    setTimeout(
      () =>
        (window.location =
          "https://trello.com/b/cMiFjg4o/the-parkinson-project"),
      750
    );

    return (
      <div className="Redirecting">
        <p>
          Redirecting you to{" "}
          <a href="https://trello.com/b/cMiFjg4o/the-parkinson-project">
            https://trello.com/b/cMiFjg4o/the-parkinson-project
          </a>
        </p>
      </div>
    );
  }
}

export default RedirectingTrello;
