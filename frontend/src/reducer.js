export const initialState = {
  adminId: null,
  user: null,
  moderatorId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        user: action.value,
      };
    case "SET_ADMIN_ID":
      // Logic for adding item to basket
      return {
        ...state,
        adminId: action.value,
      };

    case "SET_MOD_ID":
      // Logic for adding item to basket
      return {
        ...state,
        moderatorId: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
