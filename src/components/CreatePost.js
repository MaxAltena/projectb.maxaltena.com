import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postActions";
import isEmpty from "../validation/is-empty";
import removeSpecial from "../validation/remove-special";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      author: "",
      image: "",
      preview: "",
      content: ""
    };
  }

  handleChange = e => {
    if (e.target.id === "title") {
      const title = e.target.value;

      const id = removeSpecial(title.toLowerCase())
        .trim()
        .replace(/\s+/g, "-");

      this.setState({ id, title });
    } else if (e.target.id === "author") {
      const author = e.target.value;

      let image;
      e.target.childNodes.forEach(option => {
        if (option.value === author) {
          image = option.dataset.icon;
        }
      });

      this.setState({ author, image });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { createPost, history } = this.props;

    createPost(this.state);
    history.push("/");
  };

  componentDidMount = () => {
    this.makeSelectWork();
  };

  componentDidUpdate = () => {
    this.makeSelectWork();
  };

  makeSelectWork = () => {
    const script = document.createElement("script");
    script.innerHTML =
      "var elems = document.querySelectorAll('select'); var instances = M.FormSelect.init(elems, {});";
    document.body.appendChild(script);
  };

  render() {
    const { id, title, author, image, preview, content } = this.state;
    const { auth, authors } = this.props;

    if (auth.isEmpty) return <Redirect to="/" />;

    let authorElements = [];
    if (authors !== undefined) {
      for (let author in authors) {
        authorElements.push(
          <option
            value={authors[author].name}
            data-icon={authors[author].image}
            className="left"
            key={authors[author].id}
          >
            {authors[author].name}
          </option>
        );
      }
    }

    return (
      <div className="CreatePost card">
        <div className="card-content">
          <h2 className="hind bold">Bericht maken</h2>
          <div className="row">
            <form onSubmit={this.handleSubmit} className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    id="title"
                    onChange={this.handleChange}
                    value={title}
                    required
                  />
                  <label htmlFor="title">Titel</label>
                </div>
                <div className="input-field col s6">
                  <input disabled type="text" id="id" value={id} />
                  <label
                    htmlFor="id"
                    className={!isEmpty(id) ? "activeAlways" : ""}
                  >
                    ID (auto generated)
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s11">
                  <select
                    id="author"
                    value={author}
                    onChange={this.handleChange}
                  >
                    <option value="" disabled defaultValue>
                      Selecteer auteur
                    </option>
                    {authorElements}
                  </select>
                  <label>Auteur</label>
                </div>
                {image && (
                  <img
                    src={image}
                    alt="avatar"
                    className="col s1 circle right avatar"
                  />
                )}
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="preview"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                    value={preview}
                    required
                  />
                  <label htmlFor="preview">Preview</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="content"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                    value={content}
                    required
                  />
                  <label htmlFor="content">Content</label>
                  <span className="helper-text">HTML is toegestaan</span>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <p className="preview">Preview van de content</p>
                  <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect waves-light right"
                    type="submit"
                    name="action"
                  >
                    Aanmaken
                    <i className="material-icons right">add</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.firestore.data.authors === undefined) {
    return {
      ...ownProps,
      auth: state.firebase.auth
    };
  } else {
    return {
      ...ownProps,
      authors: state.firestore.data.authors,
      auth: state.firebase.auth
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    createPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "authors" }])
)(CreatePost);
