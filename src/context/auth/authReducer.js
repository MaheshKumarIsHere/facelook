import * as types from "./authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        user: null,
        loading: true,
        error: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: false,
      };

    case types.LOGIN_FAILED:
      return {
        user: null,
        loading: false,
        error: true,
      };
    default:
      state;
  }
};
