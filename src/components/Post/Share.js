import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Share = ({ post, classes }) => {
  return (
    <div className={`Share ${classes}`}>
      <div>Deel dit bericht</div>
      <div>
        {classes === "hide-on-large-only" ? null : (
          <CopyToClipboard
            text={`https://projectb.maxaltena.com/bericht/${post.id}`}
          >
            <input
              type="text"
              className="browser-default open-sans"
              readOnly={true}
              value={`https://projectb.maxaltena.com/bericht/${post.id}`}
            />
          </CopyToClipboard>
        )}
        <CopyToClipboard
          text={`https://projectb.maxaltena.com/bericht/${post.id}`}
        >
          {classes === "hide-on-large-only" ? (
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Kopieer link
            </span>
          ) : (
            <i className="material-icons right">link</i>
          )}
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Share;
