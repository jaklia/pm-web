import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { User } from "../../models/user";
import { UsersApi } from "../../network/api/users";
import { getUsersActionTypes, getUsersFail, getUsersSuccess, IGetUsersRequestAction } from "./actions/get";
import { IPostUsersRequestAction, postUsersActionTypes, postUsersFail, postUsersSuccess } from "./actions/post";

export function* usersSaga() {
  yield all([
    watchGetUsers(),
    watchPostUsers(),
  ]);
}

function* watchGetUsers() {
  yield takeEvery(getUsersActionTypes.REQUEST, getUsers);
}

function* watchPostUsers() {
  yield takeEvery(postUsersActionTypes.REQUEST, postUsers);
}

function* getUsers(action: IGetUsersRequestAction) {
  try {
    const res: AxiosResponse<User[]> = yield call(UsersApi.getAllUsers)
    yield put(getUsersSuccess(res.data));
  } catch (error) {
    yield put(getUsersFail(error.message ?? 'Something went wrong'))
  }
}

function* postUsers(action: IPostUsersRequestAction) {
  try {
    const res: AxiosResponse<User> = yield call(UsersApi.createUser, action.data);
    yield put(postUsersSuccess(res.data));
  } catch (error) {
    yield put(postUsersFail(error.message ?? 'Something went wrong'));
  }
}