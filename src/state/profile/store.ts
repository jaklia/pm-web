import { User } from "../../models/user";
import { IStoreBase } from "../store";

export interface IProfileStore extends IStoreBase {
  profile: User | null;
}

export const initialProfileStore: IProfileStore = {
  isLoaded: false,
  isRequesting: false,
  error: null,
  profile: null,
}