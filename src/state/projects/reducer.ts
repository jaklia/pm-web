import { getProjectsActionTypes, IGetProjectActions } from './actions/get';
import { IPostProjectsActions, postProjectsActionTypes } from './actions/post';
import { IPutProjectsActions, putProjectsActionTypes } from './actions/put';
import { initialProjectStore, IProjectsStore } from './store';

export const projectsReducer = (
  state: IProjectsStore = initialProjectStore,
  action: IGetProjectActions | IPostProjectsActions | IPutProjectsActions
): IProjectsStore => {
  switch (action.type) {
    case getProjectsActionTypes.REQUEST:
      console.log('get projects request');
      return {
        ...state,
        isRequesting: true,
      };
    case getProjectsActionTypes.SUCCESS:
      console.log('get projects success');
      console.log(action.data);
      return {
        ...state,
        projects: action.data,
        isRequesting: false,
        isLoaded: true,
        error: null,
      };
    case getProjectsActionTypes.FAIL:
      return {
        ...state,
        projects: [],
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      };

    case postProjectsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
        error: null,
      };
    case postProjectsActionTypes.SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.data],
        isRequesting: false,
        isLoaded: true,
        error: null,
      };
    case postProjectsActionTypes.FAIL:
      return {
        ...state,
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      };

    case putProjectsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
        error: null,
      };
    case putProjectsActionTypes.SUCCESS:
      return {
        ...state,
        projects: state.projects.map((p) => {
          if (action.data.id === p.id) {
            return action.data;
          }
          return p;
        }),
        isRequesting: false,
        isLoaded: true,
        error: null,
      };
    case putProjectsActionTypes.FAIL:
      return {
        ...state,
        isRequesting: false,
        isLoaded: true,
        error: action.reason,
      };
    default:
      return state;
  }
};
