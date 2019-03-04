import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { getPosts } from "./store/actions/postActions";

import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
// import Admin from "./components/Admin";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollHeight: window.scrollY
    };

    window.onscroll = () => {
      this.setState({ scrollHeight: window.scrollY });
    };
  }

  render() {
    const { scrollHeight } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Header cN="hide-on-med-and-down" />
          <Header cN="hide-on-large-only" />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route path="/bericht/:id" component={Post} />
              <Route path="/create" component={CreatePost} />
              {/* <Route path="/admin" component={Admin} /> */}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
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
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    posts: state.post.posts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
