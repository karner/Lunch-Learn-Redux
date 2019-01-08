import { put } from "redux-saga/effects";
import login from "../../GeoWikiAPI/User";
import { LoginSuccessful, LoginFailed } from "../Reducers/Actions";

export function * sendLogin(action) {
  const email = action.email;
  const passwordHash = action.passwordHash;
  
  const response = yield login(email, passwordHash);

  if (response !== undefined) {
    yield put(LoginSuccessful({response}));
  } else {
    yield put(LoginFailed());
  }
}
