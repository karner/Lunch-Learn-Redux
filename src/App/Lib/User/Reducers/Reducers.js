import { SEND_LOGIN, LOGOUT, LOGIN_SUCCESSFUL, LOGIN_FAILED } from './ActionTypes';

const initialState = {
    loggedIn: false,
    userId: undefined,
    userName: undefined,
    email: undefined,
    passwordHash: undefined,
    awaitingLoginResponse: false,
    logintemptFailed: false,
};

const User = (state = initialState, action) => {
    switch (action.type) {
        case SEND_LOGIN:
            state.email = action.email;
            state.passwordHash = action.passwordHash;
            state.awaitingLoginResponse = true;
            state.logintemptFailed = false;
            break;
        case LOGOUT:
            state = initialState;
            break;
        case LOGIN_FAILED:
            state = initialState;
            state.logintemptFailed = true;
            break;
        case LOGIN_SUCCESSFUL:
            state.loggedIn = true;
            state.userId = action.userId;
            state.userName = action.userName;
            state.awaitingLoginResponse = false;
            state.logintemptFailed = false;
            break;
        default:
            return state;
    }

    return state;
}

export default User;
