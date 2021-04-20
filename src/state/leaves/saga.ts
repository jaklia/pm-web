import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from 'axios';
import { Leave } from '../../models/leave';
import { LeavesApi } from '../../network/api/leaves';
import { getLeavesActionTypes, getLeavesFail, getLeavesSuccess, IGetLeavesRequestAction } from "./actions/get";
import { IPostLeavesRequestAction, postLeavesActionTypes, postLeavesFail, postLeavesSuccess } from "./actions/post";
import { IPutLeavesRequestAction, putLeavesActionTypes, putLeavesFail, putLeavesSuccess } from "./actions/put";

export function* leavesSaga() {
  yield all([watchGetLeaves(), watchPostLeaves(), watchPutLeaves()]);
}




function* watchGetLeaves() {
  yield takeEvery(getLeavesActionTypes.REQUEST, getLeaves);
}

function* watchPostLeaves() {
  yield takeEvery(postLeavesActionTypes.REQUEST, postLeaves);
}

function* watchPutLeaves() {
  yield takeEvery(putLeavesActionTypes.REQUEST, putLeaves);
}

function* getLeaves(action: IGetLeavesRequestAction) {
  try {
    const res: AxiosResponse<Leave[]> = yield call(LeavesApi.getAllLeaves);
    yield put(getLeavesSuccess(res.data));
  } catch (error) {
    yield put(getLeavesFail(error.message ?? 'Something went wrong'))
  }
}

function* postLeaves(action: IPostLeavesRequestAction) {
  try {
    const res: AxiosResponse<Leave> = yield call(LeavesApi.createLeave, action.data);
    yield put(postLeavesSuccess(res.data));
  } catch (error) {
    yield put(postLeavesFail(error.message ?? 'Something went wrong'))
  }
}

function* putLeaves(action: IPutLeavesRequestAction) {
  try {
    yield call(LeavesApi.updateLeave, action.data.id, action.data);
    yield put(putLeavesSuccess(action.data))
  } catch (error) {
    yield put(putLeavesFail(error.message ?? 'Something went wrong'))
  }
}