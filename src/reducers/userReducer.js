export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.payload;
    case "LOGED_OUT_USER":
      return action.payload;
    default:
      return state;
  }
};
