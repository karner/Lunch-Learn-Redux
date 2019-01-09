import { put } from 'redux-saga/effects';
import login from '../../../Lib/GeoWikiAPI/User';
import { LoginSuccessful, LoginFailed } from '../Reducers/Actions';

export default function* sendLogin(action) {
  const { email, passwordHash } = action;
  const response = yield login(email, passwordHash);

  if (response != undefined && response.userID != undefined) {
    yield put(LoginSuccessful(response.userID, response.username));
  } else {
    yield put(LoginFailed());
  }
}
