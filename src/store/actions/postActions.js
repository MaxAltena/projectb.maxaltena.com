export const getPosts = posts => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_POSTS", posts });
  };
};

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({
        ...post,
        date: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_POST", post });
      })
      .catch(error => {
        dispatch({ type: "ADD_POST_ERROR", error });
      });
  };
};
