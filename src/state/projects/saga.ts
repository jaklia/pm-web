import { all, takeEvery, put } from 'redux-saga/effects'
import { IGetProjectsRequestAction, getProjectsActionTypes, getProjectsSuccess } from './actions/get'
import { IPostProjectsRequestAction, postProjectsActionTypes, postProjectsSuccess } from './actions/post'
import { IPutProjectsRequestAction, putProjectsActionTypes, putProjectsSuccess } from './actions/put';

export function* projectsSaga() {
    console.log("watcher saga ")
    yield all([watchGetProjects(), watchPostProjects(), watchPutProjects()]);
}

function* watchGetProjects() {
    yield takeEvery(getProjectsActionTypes.REQUEST, getProjects);
}

function* watchPostProjects() {
    yield takeEvery(postProjectsActionTypes.REQUEST, postProjects);
}

function* watchPutProjects() {
    yield takeEvery(putProjectsActionTypes.REQUEST, putProjects);
}



function* getProjects(action: IGetProjectsRequestAction) {
    console.log('get project saga')
    const mockProjects = [
        { id: 1, name: 'asd 11', description: 'lorem ipsum', issueCount: 0 },
        { id: 2, name: 'asd 22', description: 'lorem ipsum', issueCount: 0 }
    ];
    yield put(getProjectsSuccess(mockProjects));
}

function* postProjects(action: IPostProjectsRequestAction) {
    yield put(postProjectsSuccess({ id: 1, name: 'asd', description: 'lorem ipsum', issueCount: 0 }));
}

function* putProjects(action: IPutProjectsRequestAction) {
    yield put(putProjectsSuccess(action.data));
}