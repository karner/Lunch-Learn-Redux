import { combineReducers } from "redux";
import root from "../Sagas";
import configureStore from "./CreateStore";

import { User as UserReducer } from "../Lib/User/Reducers"


export const reducers = combineReducers({
    user: UserReducer,
    //legend: LegendReducer,
    //classification: ClassificationReducer
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, root);

  if (module.hot) { //TODO: check if this is needed
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
