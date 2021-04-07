import { Project } from "../../../models/project";

export interface IPostProjectsActionTypes {
    REQUEST: 'POST_PROJECTS_REQUEST';
    SUCCESS: 'POST_PROJECTS_SUCCESS';
    FAIL: 'POST_PROJECTS_FAIL';
}

export const postProjectsActionTypes: IPostProjectsActionTypes = {
    REQUEST: 'POST_PROJECTS_REQUEST',
    SUCCESS: 'POST_PROJECTS_SUCCESS',
    FAIL: 'POST_PROJECTS_FAIL',
}

export interface IPostProjectsRequestAction {
    type: IPostProjectsActionTypes['REQUEST'];
    data: Project;
}

export interface IPostProjectsSuccessAction {
    type: IPostProjectsActionTypes['SUCCESS'];
    data: Project;
}

export interface IPostProjectsFailAction {
    type: IPostProjectsActionTypes['FAIL'];
    reason: string | null;
}

export type IPostProjectsActions =
    IPostProjectsRequestAction |
    IPostProjectsSuccessAction |
    IPostProjectsFailAction;

const postProjectsRequestActionCreator = (data: Project): IPostProjectsRequestAction => ({
    type: postProjectsActionTypes.REQUEST,
    data,
});
export const postProjectsRequest = postProjectsRequestActionCreator;
const postProjectsSuccessActionCreator = (data: Project): IPostProjectsSuccessAction => ({
    type: postProjectsActionTypes.SUCCESS,
    data,
});
export const postProjectsSuccess = postProjectsSuccessActionCreator;

const postProjectsFailActionCreator = (reason: string | null): IPostProjectsFailAction => ({
    type: postProjectsActionTypes.FAIL,
    reason,
})
export const postProjectsFail = postProjectsFailActionCreator;