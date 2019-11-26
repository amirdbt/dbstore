import { all, call, takeLatest, put } from "redux-saga/effects"
import { UserActionTypes } from "../user/UserTypes"
import { clearCart } from "./CartAction"

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSucess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSucess)])
}
