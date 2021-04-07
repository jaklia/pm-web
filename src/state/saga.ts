import { all } from "redux-saga/effects";
import { projectsSaga } from "./projects/saga";

export function* rootSaga() {
    yield all([projectsSaga()]);
}