import React, { Component } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Map from '../../Components/Map';
import ClassificationComponent from '../Classification';
import REDUX_PERSIST from "../../Config/ReduxPersist";
import createStore from "../../Reducers";
import './App.css';

const store = createStore();

class App extends Component {
  componentDidMount() {
    persistStore(
      store,
      REDUX_PERSIST.storeConfig,
      () => { this.setState({isLoading: false}); },
    );
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ClassificationComponent style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: '10', pointerEvents: 'none'}} />
          <Map style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: '-1000'}} />
        </div>
      </Provider>
    );
  }
}

export default App;
