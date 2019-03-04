import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/authActions";

const LogOut = props => {
  props.logOut();
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
