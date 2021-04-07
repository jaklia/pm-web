import { Room } from "./room";

export interface Meeting {
    id: number;
    startDate: Date;
    endDate: Date;
    title: string;
    room: Room;
    userIds: number[];
}