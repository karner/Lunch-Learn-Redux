import { all, takeLatest } from 'redux-saga/effects';
import { SEND_LOGIN, LOGIN_SUCCESSFUL, LOGOUT } from '../Components/User/Reducers/ActionTypes';
import { LEGENDS_REFRESH } from '../Components/Classification/Legends/Reducers/ActionTypes';
import sendLogin from '../Components/User/Sagas';
import getLegends from '../Components/Classification/Legends/Sagas';

export default function* root() {
  yield all([
    takeLatest(SEND_LOGIN, sendLogin),

    // Refresh legends when requested or on login / logout
    takeLatest(LEGENDS_REFRESH, getLegends),
    takeLatest(LOGIN_SUCCESSFUL, getLegends),
    takeLatest(LOGOUT, getLegends),
  ]);
}
