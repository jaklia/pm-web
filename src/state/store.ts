
import { AnyAction, combineReducers, Reducer } from "redux"
import { authReducer } from "./auth/reducer"
import { IAuthStore } from "./auth/store"
import { leavesReducer } from "./leaves/reducer"
import { ILeavesStore } from "./leaves/store"
import { projectsReducer } from "./projects/reducer"
import { IProjectsStore } from "./projects/store"
import { roomsReducer } from "./rooms/reducer"
import { IRoomStore } from "./rooms/store"

export interface IStoreBase {
  isLoaded: boolean;
  isRequesting: boolean;
  error: string | null;
}

export interface IAppStore {
  projects: IProjectsStore;
  rooms: IRoomStore;
  leaves: ILeavesStore;
  auth: IAuthStore;
}

export interface IApplicationState {
  app: IAppStore;
}



export const appReducer = combineReducers<IAppStore>({
  projects: projectsReducer,
  rooms: roomsReducer,
  leaves: leavesReducer,
  auth: authReducer,
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