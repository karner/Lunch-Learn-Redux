import { applyMiddleware, compose, createStore } from "redux";
import sagaMiddlewareFactory from "redux-saga";

export default (rootReducer, rootSaga) => {
    const middleware = [];
    const enhancers = [];

    /* ------------- Saga Middleware ------------- */

    const sagaMiddleware = sagaMiddlewareFactory();
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, compose(...enhancers));

    // kick off root saga
    const sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware,
    };

};