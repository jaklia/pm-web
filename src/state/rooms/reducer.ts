
import { getRoomsActionTypes, IGetRoomsActions } from "./actions/get";
import { IPostRoomsActions, postRoomsActionTypes } from "./actions/post";
import { IPutRoomsActions, putRoomsActionTypes } from "./actions/put";
import { initialRoomStore, IRoomStore } from "./store";

export const roomsReducer = (
  state: IRoomStore = initialRoomStore,
  action: IGetRoomsActions | IPostRoomsActions | IPutRoomsActions
): IRoomStore => {
  switch (action.type) {
    case getRoomsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
      }
    case getRoomsActionTypes.SUCCESS:
      return {
        ...state,
        rooms: action.data,
        isRequesting: false,
        isLoaded: true,
        error: null,
      }
    case getRoomsActionTypes.FAIL:
      return {
        ...state,
        rooms: [],
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      }

    case postRoomsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
        error: null,
      }
    case postRoomsActionTypes.SUCCESS:
      return {
        ...state,
        rooms: [...state.rooms, action.data],
        isRequesting: false,
        isLoaded: true,
        error: null,
      }
    case postRoomsActionTypes.FAIL:
      return {
        ...state,
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      }

    case putRoomsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
        error: null,
      }
    case putRoomsActionTypes.SUCCESS:
      return {
        ...state,
        rooms: state.rooms.map(p => {
          if (action.data.id === p.id) {
            return action.data;
          }
          return p;
        }),
        isRequesting: false,
        isLoaded: true,
        error: null,
      }
    case putRoomsActionTypes.FAIL:
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