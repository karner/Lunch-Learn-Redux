import * as ActionTypes from './ActionTypes';

export const SendLogin = (email, passwordHash) => ({
  type: ActionTypes.SEND_LOGIN,
  email,
  passwordHash,
});

export const Logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const LoginSuccessful = (userId, userName) => ({
  type: ActionTypes.LOGIN_SUCCESSFUL,
  userId,
  userName,
});

export const LoginFailed = () => ({
  type: ActionTypes.LOGIN_FAILED,
});
