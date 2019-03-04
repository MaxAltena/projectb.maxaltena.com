const initState = {};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return state;
    case "ADD_POST":
      return state;
    case "ADD_POST_ERROR":
      console.log("ADD_POST_ERROR: ", action.error);
      return state;
    default:
      return state;
  }
};

export default postReducer;
