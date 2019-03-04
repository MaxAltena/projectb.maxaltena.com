const initState = {
  authors: [
    {
      id: "Max Altena",
      name: "Max Altena",
      image: "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b"
    },
    {
      id: "Bart van de Klundert",
      name: "Bart van de Klundert",
      image: "https://www.gravatar.com/avatar/cac6fa14449e5ff820836c12a298e464"
    }
  ]
};

const authorReducer = (state = initState, action) => {
  return state;
};

export default authorReducer;
