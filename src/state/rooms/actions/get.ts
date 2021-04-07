import { Room } from "../../../models/room";

export interface IGetRoomsActionTypes {
  REQUEST: 'GET_ROOMS_REQUEST';
  SUCCESS: 'GET_ROOMS_SUCCESS';
  FAIL: 'GET_ROOMS_FAIL';
}

export const getRoomsActionTypes: IGetRoomsActionTypes = {
  REQUEST: 'GET_ROOMS_REQUEST',
  SUCCESS: 'GET_ROOMS_SUCCESS',
  FAIL: 'GET_ROOMS_FAIL',
}

export interface IGetRoomsRequestAction {
  type: IGetRoomsActionTypes['REQUEST'];
}

export interface IGetRoomsSuccessAction {
  type: IGetRoomsActionTypes['SUCCESS'];
  data: Room[];
}

export interface IGetRoomsFailAction {
  type: IGetRoomsActionTypes['FAIL'];
  reason: string | null;
}

export type IGetRoomsActions =
  IGetRoomsRequestAction |
  IGetRoomsSuccessAction |
  IGetRoomsFailAction;

const getRoomsRequestActionCreator = (): IGetRoomsRequestAction => ({
  type: getRoomsActionTypes.REQUEST
});
export const getRoomsRequest = getRoomsRequestActionCreator;

const getRoomsSuccessActionCreator = (data: Room[]): IGetRoomsSuccessAction => ({
  type: getRoomsActionTypes.SUCCESS,
  data,
});
export const getRoomsSuccess = getRoomsSuccessActionCreator;

const getRoomsFailActionCreator = (reason: string | null): IGetRoomsFailAction => ({
  type: getRoomsActionTypes.FAIL,
  reason,
})
export const getRoomsFail = getRoomsFailActionCreator;