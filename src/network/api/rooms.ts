import { Urls } from "../../constants/urls";
import { Room } from "../../models/room";
import { network } from "../network";

export class RoomsApi {
  static getAllRoom() {
    return network.get(Urls.rooms);
  }

  static createRoom(room: Room) {
    return network.post(Urls.rooms, room);
  }

  static updateRoom(id: number, room: Room) {
    return network.put(Urls.roomId(id), room);
  }

  static deleteRoom(id: number) {
    return network.delete(Urls.roomId(id));
  }

}