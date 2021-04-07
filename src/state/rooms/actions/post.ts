import { Room } from "../../../models/room";

export interface IPostRoomsActionTypes {
  REQUEST: 'POST_ROOMS_REQUEST';
  SUCCESS: 'POST_ROOMS_SUCCESS';
  FAIL: 'POST_ROOMS_FAIL';
}

export const postRoomsActionTypes: IPostRoomsActionTypes = {
  REQUEST: 'POST_ROOMS_REQUEST',
  SUCCESS: 'POST_ROOMS_SUCCESS',
  FAIL: 'POST_ROOMS_FAIL',
}

export interface IPostRoomsRequestAction {
  type: IPostRoomsActionTypes['REQUEST'];
  data: Room;
}

export interface IPostRoomsSuccessAction {
  type: IPostRoomsActionTypes['SUCCESS'];
  data: Room;
}

export interface IPostRoomsFailAction {
  type: IPostRoomsActionTypes['FAIL'];
  reason: string | null;
}

export type IPostRoomsActions =
  IPostRoomsRequestAction |
  IPostRoomsSuccessAction |
  IPostRoomsFailAction;

const postRoomsRequestActionCreator = (data: Room): IPostRoomsRequestAction => ({
  type: postRoomsActionTypes.REQUEST,
  data,
});
export const postRoomsRequest = postRoomsRequestActionCreator;

const postRoomsSuccessActionCreator = (data: Room): IPostRoomsSuccessAction => ({
  type: postRoomsActionTypes.SUCCESS,
  data,
});
export const postRoomsSuccess = postRoomsSuccessActionCreator;

const postRoomsFailActionCreator = (reason: string | null): IPostRoomsFailAction => ({
  type: postRoomsActionTypes.FAIL,
  reason,
})
export const postRoomsFail = postRoomsFailActionCreator;