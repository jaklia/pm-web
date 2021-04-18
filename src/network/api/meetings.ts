import { Urls } from "../../constants/urls";
import { Meeting } from "../../models/meeting";
import { network } from "../network";

export class MeetingsApi {

  static getAllMeetings() {
    return network.get(Urls.meetings);
  }

  static createMeeting(meeting: Meeting) {
    return network.post(Urls.meetings, meeting);
  }

  static updateMeeting(id: number, meeting: Meeting) {
    return network.put(Urls.meetingId(id), meeting);
  }

  static deleteMeeting(id: number) {
    return network.delete(Urls.meetingId(id));
  }

}