import { ILoginActions, loginActionTypes } from "./actions/login";
import { IAuthStore, initialAuthStore } from "./store";

export const authReducer = (
  state: IAuthStore = initialAuthStore,
  action: ILoginActions
): IAuthStore => {
  switch (action.type) {
    case loginActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true
      }
    case loginActionTypes.SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null
      }
    case loginActionTypes.FAIL:
      return {
        ...state,
        authenticated: false,
        error: action.reason
      }

    default:
      return state;
  }
}