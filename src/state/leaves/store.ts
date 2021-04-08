import { Leave } from "../../models/leave";
import { IStoreBase } from "../store";

export interface ILeavesStore extends IStoreBase {
  leaves: Leave[];
}

export const initialLeavesStore: ILeavesStore = {
  leaves: [],
  isRequesting: false,
  isLoaded: false,
  error: null,
}