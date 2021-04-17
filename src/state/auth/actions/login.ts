import { Login } from "../../../models/login";

export interface ILoginActionTypes {
  REQUEST: 'LOGIN_REQUEST';
  SUCCESS: 'LOGIN_SUCCESS';
  FAIL: 'LOGIN_FAIL';
}

export const loginActionTypes: ILoginActionTypes = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAIL: 'LOGIN_FAIL',
}

export interface ILoginRequestAction {
  type: ILoginActionTypes['REQUEST'];
  data: Login;
}

export interface ILoginSuccessAction {
  type: ILoginActionTypes['SUCCESS'];
}

export interface ILoginFailAction {
  type: ILoginActionTypes['FAIL'];
  reason: string | null;
}

export type ILoginActions =
  ILoginRequestAction |
  ILoginSuccessAction |
  ILoginFailAction;

const LoginRequestActionCreator = (data: Login): ILoginRequestAction => ({
  type: loginActionTypes.REQUEST,
  data,
});
export const loginRequest = LoginRequestActionCreator;

const LoginSuccessActionCreator = (): ILoginSuccessAction => ({
  type: loginActionTypes.SUCCESS,
});
export const loginSuccess = LoginSuccessActionCreator;

const LoginFailActionCreator = (reason: string | null): ILoginFailAction => ({
  type: loginActionTypes.FAIL,
  reason,
})
export const loginFail = LoginFailActionCreator;