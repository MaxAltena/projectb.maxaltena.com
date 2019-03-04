import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postActions";
import isEmpty from "../validation/is-empty";
import removeSpecial from "../validation/remove-special";

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

    this.props.createPost(this.state);

    this.props.history.push("/");
  };

  render() {
    const { id, title, author, image, preview, content } = this.state;
    const { authors } = this.props;

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
                    {authors.map(author => {
                      return (
                        <option
                          value={author.id}
                          data-icon={author.image}
                          className="left"
                          key={author.id}
                        >
                          {author.name}
                        </option>
                      );
                    })}
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
                    placeholder="Preview tekst van de content"
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
                    placeholder="Content van dit bericht"
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
  return {
    ...ownProps,
    authors: state.author.authors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    createPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
