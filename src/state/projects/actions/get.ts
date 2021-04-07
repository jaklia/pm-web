import { Project } from "../../../models/project";

export interface IGetProjectsActionTypes {
    REQUEST: 'GET_PROJECTS_REQUEST';
    SUCCESS: 'GET_PROJECTS_SUCCESS';
    FAIL: 'GET_PROJECTS_FAIL';
}

export const getProjectsActionTypes: IGetProjectsActionTypes = {
    REQUEST: 'GET_PROJECTS_REQUEST',
    SUCCESS: 'GET_PROJECTS_SUCCESS',
    FAIL: 'GET_PROJECTS_FAIL',
}

export interface IGetProjectsRequestAction {
    type: IGetProjectsActionTypes['REQUEST'];
}

export interface IGetProjectsSuccessAction {
    type: IGetProjectsActionTypes['SUCCESS'];
    data: Project[];
}

export interface IGetProjectsFailAction {
    type: IGetProjectsActionTypes['FAIL'];
    reason: string | null;
}

export type IGetProjectActions =
    IGetProjectsRequestAction |
    IGetProjectsSuccessAction |
    IGetProjectsFailAction;

const getProjectsRequestActionCreator = (): IGetProjectsRequestAction => ({
    type: getProjectsActionTypes.REQUEST
});
export const getProjectsRequest = getProjectsRequestActionCreator;

const getProjetsSuccessActionCreator = (data: Project[]): IGetProjectsSuccessAction => ({
    type: getProjectsActionTypes.SUCCESS,
    data,
});
export const getProjectsSuccess = getProjetsSuccessActionCreator;

const getProjectsFailActionCreator = (reason: string | null): IGetProjectsFailAction => ({
    type: getProjectsActionTypes.FAIL,
    reason,
})
export const getProjectsFail = getProjectsFailActionCreator;









