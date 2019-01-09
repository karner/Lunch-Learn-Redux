import {
    LEGENDS_REFRESH, LEGENDS_REFRESH_SUCCESSFUL, LEGENDS_REFRESH_FAILED
  } from './ActionTypes';
  
  const initialState = {
    legends: null,
    legendsRefreshing: false,
    legendsRefreshFailed: false,
  };
  
  const Legends = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
      case LEGENDS_REFRESH:
        newState = {...initialState};
        newState.legendsRefreshing = true;
        newState.legendsRefreshFailed = false;
        break;
      case LEGENDS_REFRESH_FAILED:
        newState = {...initialState};
        newState.legendsRefreshing = false;
        newState.legendsRefreshFailed = true;
        break;
      case LEGENDS_REFRESH_SUCCESSFUL:
        newState.legendsRefreshing = false;
        newState.legendsRefreshFailed = false;
        newState.legends = action.legends
        break;
      default:
        return newState;
    }
  
    return newState;
  };
  
  export default Legends;
  