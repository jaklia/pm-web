import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { AuthApi } from "../../network/api/auth";
import { ILoginRequestAction, loginFail, loginActionTypes, loginSuccess } from "./actions/login";
import { LoginResponse } from "../../models/loginResponse"


export function* authSaga() {
  yield all([watchLogin()]);
}

function* watchLogin() {
  yield takeLatest(loginActionTypes.REQUEST, login);
}

function* login(action: ILoginRequestAction) {
  try {
    // const res = yield AuthApi.login(action.data.userName, action.data.password);
    const res: AxiosResponse<any> = yield call(
      AuthApi.login, action.data.userName, action.data.password);
    console.log(res.data.accessToken)
    yield call([localStorage, localStorage.setItem], 'ACCESS_TOKEN', res.data.accessToken.toString());
  } catch (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 404)) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      yield put(loginFail('Incorrect username or password'));
      console.log('401/404')
    } else {
      yield put(loginFail('Something went wrong'));
      //yield call(console.log, 'Something went wrong')
      console.log('Something went wrong')
    }
  }
}