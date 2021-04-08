import { getLeavesActionTypes, IGetLeavesActions } from "./actions/get";
import { IPostLeavesActions, postLeavesActionTypes } from "./actions/post";
import { IPutLeavesActions, putLeavesActionTypes } from "./actions/put";
import { initialLeavesStore, ILeavesStore } from "./store";

export const leavesReducer = (
  state: ILeavesStore = initialLeavesStore,
  action: IGetLeavesActions | IPostLeavesActions | IPutLeavesActions
): ILeavesStore => {
  switch (action.type) {
    case getLeavesActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
      }
    case getLeavesActionTypes.SUCCESS:
      return {
        ...state,
        leaves: action.data,
        isRequesting: false,
        isLoaded: true,
        error: null,
      }
    case getLeavesActionTypes.FAIL:
      return {
        ...state,
        leaves: [],
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      }

    case postLeavesActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
        error: null,
      }
    case postLeavesActionTypes.SUCCESS:
      return {
        ...state,
        leaves: [...state.leaves, action.data],
        isRequesting: false,
        isLoaded: true,
        error: null,
      }
    case postLeavesActionTypes.FAIL:
      return {
        ...state,
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      }

    case putLeavesActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
        error: null,
      }
    case putLeavesActionTypes.SUCCESS:
      return {
        ...state,
        leaves: state.leaves.map(p => {
          if (action.data.id === p.id) {
            return action.data;
          }
          return p;
        }),
        isRequesting: false,
        isLoaded: true,
        error: null,
      }
    case putLeavesActionTypes.FAIL:
      return {
        ...state,
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      }
    default:
      return state;
  }
}