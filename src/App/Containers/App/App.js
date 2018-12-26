import React, { Component } from 'react';
import Map from '../../Components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}} />
      </div>
    );
  }
}

export default App;
