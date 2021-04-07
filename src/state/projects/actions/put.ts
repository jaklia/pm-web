import { Project } from "../../../models/project";

export interface IPutProjectsActionTypes {
    REQUEST: 'PUT_PROJECTS_REQUEST';
    SUCCESS: 'PUT_PROJECTS_SUCCESS';
    FAIL: 'PUT_PROJECTS_FAIL';
}

export const putProjectsActionTypes: IPutProjectsActionTypes = {
    REQUEST: 'PUT_PROJECTS_REQUEST',
    SUCCESS: 'PUT_PROJECTS_SUCCESS',
    FAIL: 'PUT_PROJECTS_FAIL',
}

export interface IPutProjectsRequestAction {
    type: IPutProjectsActionTypes['REQUEST'];
    data: Project;
}

export interface IPutProjectsSuccessAction {
    type: IPutProjectsActionTypes['SUCCESS'];
    data: Project
}

export interface IPutProjectsFailAction {
    type: IPutProjectsActionTypes['FAIL'];
    reason: string | null;
}

export type IPutProjectsActions =
    IPutProjectsRequestAction |
    IPutProjectsSuccessAction |
    IPutProjectsFailAction;

const putProjectsRequestActionCreator = (data: Project): IPutProjectsRequestAction => ({
    type: putProjectsActionTypes.REQUEST,
    data,
});
export const putProjectsRequest = putProjectsRequestActionCreator;

const putProjectsSuccessActionCreator = (data: Project): IPutProjectsSuccessAction => ({
    type: putProjectsActionTypes.SUCCESS,
    data,
});
export const putProjectsSuccess = putProjectsSuccessActionCreator;

const putProjectsFailActionCreator = (reason: string | null): IPutProjectsFailAction => ({
    type: putProjectsActionTypes.FAIL,
    reason,
})
export const putProjectsFail = putProjectsFailActionCreator;