import { Room } from "../../models/room";
import { IStoreBase } from "../store";

export interface IRoomStore extends IStoreBase {
  rooms: Room[];
}

export const initialRoomStore: IRoomStore = {
  rooms: [],
  isRequesting: false,
  isLoaded: false,
  error: null
}