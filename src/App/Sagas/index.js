import { all, takeLatest } from "redux-saga/effects";
import { SEND_LOGIN } from "../Lib/User/Reducers/ActionTypes";
import { sendLogin } from "../Lib/User/Sagas";

export default function * root() {
  yield all([
    takeLatest(SEND_LOGIN, sendLogin)
  ]);
}
