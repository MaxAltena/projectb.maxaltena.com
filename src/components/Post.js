import React from "react";
import { Redirect } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import "moment/locale/nl";

const Post = ({ history, post, loading }) => {
  if (!loading) {
    if (post !== undefined) {
      return (
        <div className="Post card">
          <h1 className="hind bold">{post.title}</h1>
          <div className="details">
            <img src={post.image} alt="Auteur" className="circle" />
            <div>
              <span>Auteur</span>
              <span>{post.author}</span>
            </div>
            <div>
              <span>Gepubliceerd</span>
              <span>{moment(post.date.toDate()).calendar()}</span>
            </div>
            <div className="share">
              <div>Deel dit bericht</div>
              <div>
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
                <CopyToClipboard
                  text={`https://projectb.maxaltena.com/bericht/${post.id}`}
                >
                  <i className="material-icons right">link</i>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="content">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <i
            className="material-icons goBack shake shake-slow-small"
            onClick={() => history.push("/")}
          >
            keyboard_arrow_left
          </i>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  } else {
    return <div className="center">Laden...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;

  if (posts !== undefined) {
    for (let post in posts) {
      if (posts[post].id === id)
        return { ...ownProps, post: posts[post], loading: false };
    }
  } else {
    return { ...ownProps, loading: true };
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Post);
