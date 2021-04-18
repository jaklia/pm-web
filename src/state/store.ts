
import { AnyAction, combineReducers, Reducer } from "redux"
import { authReducer } from "./auth/reducer"
import { IAuthStore } from "./auth/store"
import { leavesReducer } from "./leaves/reducer"
import { ILeavesStore } from "./leaves/store"
import { projectsReducer } from "./projects/reducer"
import { IProjectsStore } from "./projects/store"
import { roomsReducer } from "./rooms/reducer"
import { IRoomStore } from "./rooms/store"
import { usersReducer } from "./users/reducer"
import { IUsersStore } from "./users/store"

export interface IStoreBase {
  isLoaded: boolean;
  isRequesting: boolean;
  error: string | null;
}

export interface IAppStore {
  auth: IAuthStore;
  users: IUsersStore;
  projects: IProjectsStore;
  rooms: IRoomStore;
  leaves: ILeavesStore;
}

export interface IApplicationState {
  app: IAppStore;
}



export const appReducer = combineReducers<IAppStore>({
  auth: authReducer,
  users: usersReducer,
  projects: projectsReducer,
  rooms: roomsReducer,
  leaves: leavesReducer,
})

export const appRootReducer: Reducer<IAppStore> = (
  state: IAppStore | undefined,
  action: AnyAction
): IAppStore => {
  if (action.type === 'RESET_EVERYTHING') {
    state = undefined
  }
  return appReducer(state, action)
}