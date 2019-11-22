import { all, call } from "redux-saga/effects"
import { fetchCollectionsStart } from "./Shop/shopSaga"
import { userSagas } from "./user/userSaga"

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)])
}
