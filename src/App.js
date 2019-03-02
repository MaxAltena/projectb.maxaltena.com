import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Logo from "./components/Header/Logo";
import Socials from "./components/Header/Socials";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import Admin from "./components/Admin";

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
          <header className="hide-on-med-and-down">
            <Logo />
            <Socials />
          </header>
          <header className="hide-on-large-only">
            <Logo />
            <Socials />
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route path="/post/:id" component={Post} />
              <Route path="/create" component={CreatePost} />
              <Route path="/admin" component={Admin} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
          <i
            className={
              scrollHeight >= 25
                ? "material-icons scrollToTop scrolled"
                : "material-icons scrollToTop"
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

export default App;
