import { all, put, takeEvery, call } from "@redux-saga/core/effects";
import { AxiosResponse } from 'axios';
import { Room } from '../../models/room';
import { RoomsApi } from '../../network/api/rooms';
import { putProjectsActionTypes } from "../projects/actions/put";
import { getRoomsActionTypes, getRoomsFail, getRoomsSuccess, IGetRoomsRequestAction } from "./actions/get";
import { IPostRoomsRequestAction, postRoomsActionTypes, postRoomsFail, postRoomsSuccess } from "./actions/post";
import { IPutRoomsRequestAction, putRoomsFail, putRoomsSuccess } from "./actions/put";

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
  try {
    const res: AxiosResponse<Room[]> = yield call(RoomsApi.getAllRooms);
    yield put(getRoomsSuccess(res.data));
  } catch (error) {
    yield put(getRoomsFail(error.message ?? 'Something went wrong'));
  }
}

function* postRooms(action: IPostRoomsRequestAction) {
  try {
    const res: AxiosResponse<Room> = yield call(RoomsApi.createRoom, action.data);
    yield put(postRoomsSuccess(res.data));
  } catch (error) {
    yield put(postRoomsFail(error.message ?? 'Something went wrong'));
  }
}

function* putRooms(action: IPutRoomsRequestAction) {
  try {
    yield call(RoomsApi.updateRoom, action.data.id, action.data);
    yield put(putRoomsSuccess(action.data));
  } catch (error) {
    yield put(putRoomsFail(error.message ?? 'Something went wrong'));
  }
}