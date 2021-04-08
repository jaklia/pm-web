import { Leave } from "../../../models/leave";

export interface IPostLeavesActionTypes {
  REQUEST: 'POST_LEAVES_REQUEST';
  SUCCESS: 'POST_LEAVES_SUCCESS';
  FAIL: 'POST_LEAVES_FAIL';
}

export const postLeavesActionTypes: IPostLeavesActionTypes = {
  REQUEST: 'POST_LEAVES_REQUEST',
  SUCCESS: 'POST_LEAVES_SUCCESS',
  FAIL: 'POST_LEAVES_FAIL',
}

export interface IPostLeavesRequestAction {
  type: IPostLeavesActionTypes['REQUEST'];
  data: Leave;
}

export interface IPostLeavesSuccessAction {
  type: IPostLeavesActionTypes['SUCCESS'];
  data: Leave;
}

export interface IPostLeavesFailAction {
  type: IPostLeavesActionTypes['FAIL'];
  reason: string | null;
}

export type IPostLeavesActions =
  IPostLeavesRequestAction |
  IPostLeavesSuccessAction |
  IPostLeavesFailAction;

const postLeavesRequestActionCreator = (data: Leave): IPostLeavesRequestAction => ({
  type: postLeavesActionTypes.REQUEST,
  data,
});
export const postLeavesRequest = postLeavesRequestActionCreator;

const postLeavesSuccessActionCreator = (data: Leave): IPostLeavesSuccessAction => ({
  type: postLeavesActionTypes.SUCCESS,
  data,
});
export const postLeavesSuccess = postLeavesSuccessActionCreator;

const postLeavesFailActionCreator = (reason: string | null): IPostLeavesFailAction => ({
  type: postLeavesActionTypes.FAIL,
  reason,
})
export const postLeavesFail = postLeavesFailActionCreator;