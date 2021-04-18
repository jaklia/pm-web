export class Urls {
  static projects = '/api/projects';
  static users = '/api/users';
  static rooms = 'api/rooms';
  static meetings = 'api/meetings';
  static leaves = 'api/leaves';

  static projectId = (id: number) => `${Urls.projects}/${id}`;
  static userId = (id: number) => `${Urls.users}/${id}`;
  static roomId = (id: number) => `${Urls.rooms}/${id}`;
  static meetingId = (id: number) => `${Urls.meetings}/${id}`;
  static leaveId = (id: number) => `${Urls.leaves}/${id}`;
}