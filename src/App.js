import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { firestoreConnect } from "react-redux-firebase";

import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";

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
              <Route path="/login" component={LogIn} />
              <Route path="/logout" component={LogOut} />
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

export default firestoreConnect([
  { collection: "posts", orderBy: ["date", "desc"] },
  { collection: "authors" }
])(App);
