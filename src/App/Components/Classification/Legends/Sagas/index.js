import { put } from 'redux-saga/effects';
import { getLegends as sendGetLegends } from '../../../../Lib/GeoWikiAPI/Legend';
import { RefreshLegendsFailed, RefreshLegendsSuccessful } from '../Reducers/Actions';
import { store } from '../../../../Containers/App/App'

export default function* getLegends(action) {
  let { email, passwordHash } = action;

  if (email == null || passwordHash == null){
      if (store != null && store.user != null){
        email = store.user.email;
        passwordHash = store.user.passwordHash;
      }
  }

  const response = yield sendGetLegends(email, passwordHash);

  if (response != undefined) {
    yield put(RefreshLegendsSuccessful(response));
  } else {
    yield put(RefreshLegendsFailed());
  }
}
