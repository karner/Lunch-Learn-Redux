import { put } from "redux-saga/effects";
import { sendLogin as SendLogin } from "../../GeoWikiAPI/User";
import { userSuccess, userFailure } from "../Reducers/Actions";

export function * sendLogin(action) {
  const email = action.email;
  const passwordHash = action.passwordHash;
  
  const response = yield SendLogin(email, passwordHash);

  if (response !== undefined) {
    yield put(userSuccess({response}));
  } else {
    yield put(userFailure());
  }
}
