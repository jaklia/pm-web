import { all, takeEvery } from "@redux-saga/core/effects";
import { IPutProjectsRequestAction } from "../projects/actions/put";
import { getLeavesActionTypes, IGetLeavesRequestAction } from "./actions/get";
import { IPostLeavesRequestAction, postLeavesActionTypes } from "./actions/post";
import { putLeavesActionTypes } from "./actions/put";

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

}

function* postLeaves(action: IPostLeavesRequestAction) {

}

function* putLeaves(action: IPutProjectsRequestAction) {

}