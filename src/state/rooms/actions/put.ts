import { Room } from "../../../models/room";

export interface IPutRoomsActionTypes {
  REQUEST: 'PUT_ROOMS_REQUEST';
  SUCCESS: 'PUT_ROOMS_SUCCESS';
  FAIL: 'PUT_ROOMS_FAIL';
}

export const putRoomsActionTypes: IPutRoomsActionTypes = {
  REQUEST: 'PUT_ROOMS_REQUEST',
  SUCCESS: 'PUT_ROOMS_SUCCESS',
  FAIL: 'PUT_ROOMS_FAIL',
}

export interface IPutRoomsRequestAction {
  type: IPutRoomsActionTypes['REQUEST'];
  data: Room;
}

export interface IPutRoomsSuccessAction {
  type: IPutRoomsActionTypes['SUCCESS'];
  data: Room;
}

export interface IPutRoomsFailAction {
  type: IPutRoomsActionTypes['FAIL'];
  reason: string | null;
}

export type IPutRoomsActions =
  IPutRoomsRequestAction |
  IPutRoomsSuccessAction |
  IPutRoomsFailAction;

const putRoomsRequestActionCreator = (data: Room): IPutRoomsRequestAction => ({
  type: putRoomsActionTypes.REQUEST,
  data,
});
export const putRoomsRequest = putRoomsRequestActionCreator;

const putRoomsSuccessActionCreator = (data: Room): IPutRoomsSuccessAction => ({
  type: putRoomsActionTypes.SUCCESS,
  data,
});
export const putRoomsSuccess = putRoomsSuccessActionCreator;

const putRoomsFailActionCreator = (reason: string | null): IPutRoomsFailAction => ({
  type: putRoomsActionTypes.FAIL,
  reason,
})
export const putRoomsFail = putRoomsFailActionCreator;