export default (state, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    default:
      return state;
  }
};
