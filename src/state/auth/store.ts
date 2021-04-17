import { IStoreBase } from "../store";

export interface IAuthStore extends IStoreBase {
  authenticated: boolean
}

export const initialAuthStore: IAuthStore = {
  authenticated: false,
  isLoaded: false,
  isRequesting: false,
  error: null,
}