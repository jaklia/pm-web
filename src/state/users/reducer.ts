import { getUsersActionTypes, IGetUsersActions } from "./actions/get";
import { initialUsersStore, IUsersStore } from "./store";

export const usersReducer = (
  state: IUsersStore = initialUsersStore,
  action: IGetUsersActions
): IUsersStore => {
  switch (action.type) {
    case getUsersActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
      }
    case getUsersActionTypes.SUCCESS:
      return {
        ...state,
        users: action.data,
        isLoaded: true,
        isRequesting: false,
      }
    case getUsersActionTypes.FAIL:
      return {
        ...state,
        isRequesting: false,
        error: action.reason,
      }
    default:
      return state;
  }
}