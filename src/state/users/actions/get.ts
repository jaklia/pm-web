import { User } from "../../../models/user";

export interface IGetUsersActionTypes {
  REQUEST: 'GET_USERS_REQUEST';
  SUCCESS: 'GET_USERS_SUCCESS';
  FAIL: 'GET_USERS_FAIL';
}

export const getUsersActionTypes: IGetUsersActionTypes = {
  REQUEST: 'GET_USERS_REQUEST',
  SUCCESS: 'GET_USERS_SUCCESS',
  FAIL: 'GET_USERS_FAIL',
}

export interface IGetUsersRequestAction {
  type: IGetUsersActionTypes['REQUEST'];
}

export interface IGetUsersSuccessAction {
  type: IGetUsersActionTypes['SUCCESS'];
  data: User[];
}

export interface IGetUsersFailAction {
  type: IGetUsersActionTypes['FAIL'];
  reason: string | null;
}

export type IGetUsersActions =
  IGetUsersRequestAction |
  IGetUsersSuccessAction |
  IGetUsersFailAction;

const getUsersRequestActionCreator = (): IGetUsersRequestAction => ({
  type: getUsersActionTypes.REQUEST
});
export const getUsersRequest = getUsersRequestActionCreator;

const getUsersSuccessActionCreator = (data: User[]): IGetUsersSuccessAction => ({
  type: getUsersActionTypes.SUCCESS,
  data,
});
export const getUsersSuccess = getUsersSuccessActionCreator;

const getUsersFailActionCreator = (reason: string | null): IGetUsersFailAction => ({
  type: getUsersActionTypes.FAIL,
  reason,
})
export const getUsersFail = getUsersFailActionCreator;