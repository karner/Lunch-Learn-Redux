import React from 'react';
import { Map as LeafletMap } from 'react-leaflet';
import LayersControl from './LayersControl';


export default class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      mapCenter: [48.063259, 16.363239],
      zoomLevel: 15
    //   geodata: null,
    //   isadded: false
    }
  }

  render() {

    return (        
        <LeafletMap center={this.state.mapCenter} zoom={this.state.zoomLevel} zoomControl={true} style={this.props.style}>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
          <LayersControl />
        </LeafletMap>
    )
  }
}