import { editProjectActionTypes, IEditProjectActions } from './actions/edit';
import { getProjectsActionTypes, IGetProjectActions } from './actions/get';
import { IPostProjectsActions, postProjectsActionTypes } from './actions/post';
import { IPutProjectsActions, putProjectsActionTypes } from './actions/put';
import { initialProjectStore, IProjectsStore } from './store';

export const projectsReducer = (
  state: IProjectsStore = initialProjectStore,
  action: IGetProjectActions | IPostProjectsActions | IPutProjectsActions | IEditProjectActions
): IProjectsStore => {
  switch (action.type) {
    case editProjectActionTypes.EDIT:
      return {
        ...state,
        editing: true,
      };
    case getProjectsActionTypes.REQUEST:
      console.log('get projects request');
      return {
        ...state,
        isRequesting: true,
        isLoaded: false,
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
        isLoaded: false,
        error: action.reason,
      };

    case postProjectsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
        error: null,
      };
    case postProjectsActionTypes.SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.data],
        editing: false,
        isRequesting: false,
        error: null,
      };
    case postProjectsActionTypes.FAIL:
      return {
        ...state,
        editing: false,
        isRequesting: false,
        error: action.reason,
      };

    case putProjectsActionTypes.REQUEST:
      return {
        ...state,
        isRequesting: true,
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
        editing: false,
        isRequesting: false,
        error: null,
      };
    case putProjectsActionTypes.FAIL:
      return {
        ...state,
        editing: false,
        isRequesting: false,
        error: action.reason,
      };
    default:
      return state;
  }
};
