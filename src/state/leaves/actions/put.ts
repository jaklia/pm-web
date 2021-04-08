import { Leave } from "../../../models/leave";

export interface IPutLeavesActionTypes {
  REQUEST: 'PUTLEAVEPUT_CLASSNAMELEAVES_REQUEST';
  SUCCESS: 'PUTLEAVEPUT_CLASSNAMELEAVES_SUCCESS';
  FAIL: 'PUTLEAVEPUT_CLASSNAMELEAVES_FAIL';
}

export const putLeavesActionTypes: IPutLeavesActionTypes = {
  REQUEST: 'PUTLEAVEPUT_CLASSNAMELEAVES_REQUEST',
  SUCCESS: 'PUTLEAVEPUT_CLASSNAMELEAVES_SUCCESS',
  FAIL: 'PUTLEAVEPUT_CLASSNAMELEAVES_FAIL',
}

export interface IPutLeavesRequestAction {
  type: IPutLeavesActionTypes['REQUEST'];
  data: Leave;
}

export interface IPutLeavesSuccessAction {
  type: IPutLeavesActionTypes['SUCCESS'];
  data: Leave;
}

export interface IPutLeavesFailAction {
  type: IPutLeavesActionTypes['FAIL'];
  reason: string | null;
}

export type IPutLeavesActions =
  IPutLeavesRequestAction |
  IPutLeavesSuccessAction |
  IPutLeavesFailAction;

const putLeavesRequestActionCreator = (data: Leave): IPutLeavesRequestAction => ({
  type: putLeavesActionTypes.REQUEST,
  data,
});
export const putLeavesRequest = putLeavesRequestActionCreator;

const putLeavesSuccessActionCreator = (data: Leave): IPutLeavesSuccessAction => ({
  type: putLeavesActionTypes.SUCCESS,
  data,
});
export const putLeavesSuccess = putLeavesSuccessActionCreator;

const putLeavesFailActionCreator = (reason: string | null): IPutLeavesFailAction => ({
  type: putLeavesActionTypes.FAIL,
  reason,
})
export const putLeavesFail = putLeavesFailActionCreator;