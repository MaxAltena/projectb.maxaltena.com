import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    const { email, password } = this.state;
    const { auth, authError } = this.props;

    if (!auth.isEmpty) return <Redirect to="/" />;
    return (
      <div className="Login card">
        <div className="card-content">
          <span className="card-title">Login</span>
          <div className="row">
            <form onSubmit={this.handleSubmit} className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Wachtwoord</label>
                </div>
              </div>
              <div className="row">
                <div className="right">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Log in
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
              <div
                className="row red-text"
                style={{ height: "25px", margin: "0" }}
              >
                {authError}
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    logIn: creds => {
      dispatch(logIn(creds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
