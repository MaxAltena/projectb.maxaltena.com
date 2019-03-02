import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Post extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;
    const { posts } = this.props;

    this.state = {
      post: posts.find(x => Number(x.id) === Number(id))
    };
  }

  render() {
    const { post } = this.state;

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
              <span>Gepubliceerd op</span>
              <span>{post.date}</span>
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
          <div className="content">{post.content}</div>
          <i
            className="material-icons goBack"
            onClick={() => this.props.history.push("/")}
          >
            keyboard_arrow_left
          </i>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Post;
