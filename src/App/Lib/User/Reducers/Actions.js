import * as ActionTypes from './ActionTypes';

const SendLogin = (dispatch, email, passwordHash) => {
    dispatch({
        type:ActionTypes.SEND_LOGIN, 
        email, 
        passwordHash
    });
};

const Logout = dispatch => {
    dispatch({
        type: ActionTypes.LOGOUT
    });
};

const LoginSuccessful = (dispatch, userId, userName) => {
    dispatch({
        type: ActionTypes.LOGIN_SUCCESSFUL,
        userId,
        userName
    });
};

const LoginFailed = dispatch => {
    dispatch({
        type: ActionTypes.LOGIN_FAILED
    });
};

