import { Urls } from "../../constants/urls";
import { User } from "../../models/user";
import { network } from "../network";

export class UsersApi {
  static getProfile() {
    // TODO: get the current users profile
  }

  static getAllUsers() {
    return network.get(Urls.users);
  }

  static createUser(user: User) {
    // FIXME:  check this in backend, probably needs to be changed there
    return network.post(Urls.users, user);
  }

  static updateUser(id: number, user: User) {
    return network.put(Urls.userId(id), user);
  }

  static deleteUser(id: number) {
    return network.delete(Urls.userId(id));
  }

}