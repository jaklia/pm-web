import { Urls } from "../../constants/urls";
import { Leave } from "../../models/leave";
import { network } from "../network";

export class LeavesApi {

  static getAllLeaves() {
    return network.get(Urls.leaves);
  }

  static createLeave(leave: Leave) {
    return network.post(Urls.leaves, leave);
  }

  static updateLeave(id: number, leave: Leave) {
    return network.put(Urls.leaveId(id), leave);
  }

  static deleteLeave(id: number) {
    return network.delete(Urls.leaveId(id));
  }

}