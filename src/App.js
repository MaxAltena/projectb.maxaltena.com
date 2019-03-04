import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { firestoreConnect } from "react-redux-firebase";

import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post/Post";
import CreatePost from "./components/CreatePost";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import ScrollToTop from "./components/common/ScrollToTop";

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
          <Header cN="hide-on-med-and-down" type="link" />
          <Header cN="hide-on-large-only" type="link" />
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
          <ScrollToTop scroll={scroll} scrollHeight={scrollHeight} />
        </div>
      </BrowserRouter>
    );
  }
}

export default firestoreConnect([
  { collection: "posts", orderBy: ["date", "desc"] },
  { collection: "authors" }
])(App);
