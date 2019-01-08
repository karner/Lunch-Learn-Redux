import * as ActionTypes from './ActionTypes';

export const SendLogin = (email, passwordHash) => {
    return {
        type:ActionTypes.SEND_LOGIN, 
        email, 
        passwordHash
    };
};

export const Logout = () => {
    return {
        type: ActionTypes.LOGOUT
    };
};

export const LoginSuccessful = (userId, userName) => {
    return {
        type: ActionTypes.LOGIN_SUCCESSFUL,
        userId,
        userName
    };
};

export const LoginFailed = () => {
    return {
        type: ActionTypes.LOGIN_FAILED
    };
};

