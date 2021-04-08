import { Leave } from "../../../models/leave";

export interface IGetLeavesActionTypes {
  REQUEST: 'GET_LEAVES_REQUEST';
  SUCCESS: 'GET_LEAVES_SUCCESS';
  FAIL: 'GET_LEAVES_FAIL';
}

export const getLeavesActionTypes: IGetLeavesActionTypes = {
  REQUEST: 'GET_LEAVES_REQUEST',
  SUCCESS: 'GET_LEAVES_SUCCESS',
  FAIL: 'GET_LEAVES_FAIL',
}

export interface IGetLeavesRequestAction {
  type: IGetLeavesActionTypes['REQUEST'];
}

export interface IGetLeavesSuccessAction {
  type: IGetLeavesActionTypes['SUCCESS'];
  data: Leave[];
}

export interface IGetLeavesFailAction {
  type: IGetLeavesActionTypes['FAIL'];
  reason: string | null;
}

export type IGetLeavesActions =
  IGetLeavesRequestAction |
  IGetLeavesSuccessAction |
  IGetLeavesFailAction;

const getLeavesRequestActionCreator = (): IGetLeavesRequestAction => ({
  type: getLeavesActionTypes.REQUEST
});
export const getLeavesRequest = getLeavesRequestActionCreator;

const getLeavesSuccessActionCreator = (data: Leave[]): IGetLeavesSuccessAction => ({
  type: getLeavesActionTypes.SUCCESS,
  data,
});
export const getLeavesSuccess = getLeavesSuccessActionCreator;

const getLeavesFailActionCreator = (reason: string | null): IGetLeavesFailAction => ({
  type: getLeavesActionTypes.FAIL,
  reason,
})
export const getLeavesFail = getLeavesFailActionCreator;
