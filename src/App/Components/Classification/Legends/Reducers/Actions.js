import * as ActionTypes from './ActionTypes';

export const RefreshLegends = (email, passwordHash) => ({
  type: ActionTypes.LEGENDS_REFRESH,
  email,
  passwordHash,
});

export const RefreshLegendsSuccessful = (legends) => ({
  type: ActionTypes.LEGENDS_REFRESH_SUCCESSFUL,
  legends,
});

export const RefreshLegendsFailed = () => ({
  type: ActionTypes.LEGENDS_REFRESH_FAILED,
});
