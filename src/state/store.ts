
import { AnyAction, combineReducers, Reducer } from "redux"
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
}

export interface IApplicationState {
  app: IAppStore;
}



export const appReducer = combineReducers<IAppStore>({
  projects: projectsReducer,
  rooms: roomsReducer,
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