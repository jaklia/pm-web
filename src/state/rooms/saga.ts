import { all, put, takeEvery } from "@redux-saga/core/effects";
import { putProjectsActionTypes } from "../projects/actions/put";
import { getRoomsActionTypes, getRoomsSuccess, IGetRoomsRequestAction } from "./actions/get";
import { IPostRoomsRequestAction, postRoomsActionTypes, postRoomsSuccess } from "./actions/post";
import { IPutRoomsRequestAction, putRoomsSuccess } from "./actions/put";

export function* roomsSaga() {
  yield all([watchRooms()]);
  // yield all([watchGetRooms(), watchPostRooms(), watchPutRooms()]);
}

function* watchRooms() {
  yield takeEvery(getRoomsActionTypes.REQUEST, getRooms);
  yield takeEvery(postRoomsActionTypes.REQUEST, postRooms);
  yield takeEvery(putProjectsActionTypes.REQUEST, putRooms);
}

// function* watchGetRooms() {
//   yield takeEvery(getRoomsActionTypes.REQUEST, getRooms);
// }

// function* watchPostRooms() {
//   yield takeEvery(postRoomsActionTypes.REQUEST, postRooms);
// }

// function* watchPutRooms() {
//   yield takeEvery(putProjectsActionTypes.REQUEST, putRooms);
// }

function* getRooms(action: IGetRoomsRequestAction) {
  const rooms = [{ id: 1, name: "R11", capacity: 20 }, { id: 2, name: "R22", capacity: 20 }];
  yield put(getRoomsSuccess(rooms));
}

function* postRooms(action: IPostRoomsRequestAction) {
  yield put(postRoomsSuccess({ ...action.data, id: 1 }))
}

function* putRooms(action: IPutRoomsRequestAction) {
  yield put(putRoomsSuccess(action.data));
}