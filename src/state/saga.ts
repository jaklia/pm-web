import { all } from "redux-saga/effects";
import { authSaga } from "./auth/saga";
import { leavesSaga } from "./leaves/saga";
import { projectsSaga } from "./projects/saga";
import { roomsSaga } from "./rooms/saga";

export function* rootSaga() {
    yield all([
        authSaga(),
        projectsSaga(),
        roomsSaga(),
        leavesSaga(),
    ]);
}