import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { AuthApi } from "../../network/api/auth";
import { ILoginRequestAction, loginFail, loginActionTypes, loginSuccess } from "./actions/login";
import { JWTHelper } from "../../helpers/jwtHelper";
import { localStorageKeys } from "../../constants/enums";


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

    let token: string = res.data.accessToken.toString();
    yield call([localStorage, localStorage.setItem], localStorageKeys.ACCESS_TOKEN, token);
    let userId: number = yield call(JWTHelper.getUserId, token);
    yield put(loginSuccess());
  } catch (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 404)) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      yield put(loginFail('Incorrect username or password'));
      console.log('401/404')
    } /*else if (error.message && error.message === 'Invalid id') {
      yield put(loginFail('Invalid id'));
      console.log('invalid id')
    }*/ else {
      yield put(loginFail('Something went wrong'));
      //yield call(console.log, 'Something went wrong')
      console.log('Something went wrong')
    }
  }
}