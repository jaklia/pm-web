import { User } from "../../models/user";
import { IStoreBase } from "../store";

export interface IUsersStore extends IStoreBase {
  users: User[];
}

export const initialUsersStore: IUsersStore = {
  users: [],
  isLoaded: false,
  isRequesting: false,
  error: null,
}