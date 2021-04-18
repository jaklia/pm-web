import { User } from "../../../models/user";

export interface IPostUsersActionTypes {
  REQUEST: 'POST_USERS_REQUEST';
  SUCCESS: 'POST_USERS_SUCCESS';
  FAIL: 'POST_USERS_FAIL';
}

export const postUsersActionTypes: IPostUsersActionTypes = {
  REQUEST: 'POST_USERS_REQUEST',
  SUCCESS: 'POST_USERS_SUCCESS',
  FAIL: 'POST_USERS_FAIL',
}

export interface IPostUsersRequestAction {
  type: IPostUsersActionTypes['REQUEST'];
  data: User;
}

export interface IPostUsersSuccessAction {
  type: IPostUsersActionTypes['SUCCESS'];
  data: User;
}

export interface IPostUsersFailAction {
  type: IPostUsersActionTypes['FAIL'];
  reason: string | null;
}

export type IPostUsersActions =
  IPostUsersRequestAction |
  IPostUsersSuccessAction |
  IPostUsersFailAction;

const postUsersRequestActionCreator = (data: User): IPostUsersRequestAction => ({
  type: postUsersActionTypes.REQUEST,
  data,
});
export const postUsersRequest = postUsersRequestActionCreator;

const postUsersSuccessActionCreator = (data: User): IPostUsersSuccessAction => ({
  type: postUsersActionTypes.SUCCESS,
  data,
});
export const postUsersSuccess = postUsersSuccessActionCreator;

const postUsersFailActionCreator = (reason: string | null): IPostUsersFailAction => ({
  type: postUsersActionTypes.FAIL,
  reason,
})
export const postUsersFail = postUsersFailActionCreator;