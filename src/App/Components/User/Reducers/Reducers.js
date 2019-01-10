import {
  SEND_LOGIN, LOGOUT, LOGIN_SUCCESSFUL, LOGIN_FAILED,
} from './ActionTypes';

const initialState = {
  loggedIn: false,
  userId: undefined,
  userName: '',
  email: undefined,
  passwordHash: undefined,
  awaitingLoginResponse: false,
  loginAttemptFailed: false,
};

const User = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case SEND_LOGIN:
      newState.email = action.email;
      newState.passwordHash = action.passwordHash;
      newState.awaitingLoginResponse = true;
      newState.loginAttemptFailed = false;
      break;

    case LOGOUT:
      newState = initialState;
      break;

    case LOGIN_FAILED:
      newState = {...initialState};
      newState.loginAttemptFailed = true;
      newState.awaitingLoginResponse = false;
      break;

    case LOGIN_SUCCESSFUL:
      newState.loggedIn = true;
      newState.userId = action.userId;
      newState.userName = action.userName;
      newState.awaitingLoginResponse = false;
      newState.loginAttemptFailed = false;
      break;

    default:
      return newState;
  }

  return newState;
};

export default User;
