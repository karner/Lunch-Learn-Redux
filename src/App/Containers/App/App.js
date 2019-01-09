import React, { Component } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Map from '../../Lib/Map';
import AppUI from '../AppUI';
import REDUX_PERSIST from "../../Config/ReduxPersist";
import createStore from "../../Reducers";
import '../../Themes/theme.css';

const store = createStore();

class App extends Component {
  componentDidMount() {
    persistStore(
      store,
      REDUX_PERSIST.storeConfig,
      () => { this.setState({isLoading: false}); }
    );
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppUI className="AppUI" />
          <Map className="Map" />
        </div>
      </Provider>
    );
  }
}

export {store};
export default App;
