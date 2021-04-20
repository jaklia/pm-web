import { AxiosResponse } from 'axios';
import { all, takeEvery, put, call, delay } from 'redux-saga/effects';
import { Project } from '../../models/project';
import { ProjectsApi } from '../../network/api/projects';
import {
  IGetProjectsRequestAction,
  getProjectsActionTypes,
  getProjectsSuccess,
  getProjectsFail,
} from './actions/get';
import {
  IPostProjectsRequestAction,
  postProjectsActionTypes,
  postProjectsFail,
  postProjectsSuccess,
} from './actions/post';
import {
  IPutProjectsRequestAction,
  putProjectsActionTypes,
  putProjectsFail,
  putProjectsSuccess,
} from './actions/put';

export function* projectsSaga() {
  console.log('watcher saga ');
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
  console.log('get project saga');
  try {
    const res: AxiosResponse<Project[]> = yield call(ProjectsApi.getAllProjects);
    yield put(getProjectsSuccess(res.data));
  } catch (error) {
    yield put(getProjectsFail(error.message ?? 'Something went wrong'));
  }
}

function* postProjects(action: IPostProjectsRequestAction) {
  try {
    const res: AxiosResponse<Project> = yield call(ProjectsApi.createProject, action.data);
    yield put(postProjectsSuccess(res.data));
  } catch (error) {
    yield put(postProjectsFail(error.message ?? 'Something went wrong'));
  }
}

function* putProjects(action: IPutProjectsRequestAction) {
  try {
    const res: AxiosResponse = yield call(ProjectsApi.updateProject, action.data.id, action.data);
    yield put(putProjectsSuccess(action.data));
  } catch (error) {
    yield put(putProjectsFail(error.message ?? 'Something went wrong'));
  }
}
