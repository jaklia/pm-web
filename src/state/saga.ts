import { all } from "redux-saga/effects";
import { projectsSaga } from "./projects/saga";
import { roomsSaga } from "./rooms/saga";

export function* rootSaga() {
    yield all([
        projectsSaga(),
        roomsSaga(),
    ]);
}