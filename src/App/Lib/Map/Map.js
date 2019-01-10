import React from 'react';
import { Map as LeafletMap, WMSTileLayer } from 'react-leaflet';
import LayersControl from './LayersControl';
import "../../Themes/theme.css";
import "../../Themes/leaflet.css";

export default class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      mapCenter: [48.063259, 16.363239],
      zoomLevel: 15
    };
  }

  render() {
    return (        
        <LeafletMap center={this.state.mapCenter} zoom={this.state.zoomLevel} zoomControl={false} style={this.props.style} className={this.props.className} children>
          <LayersControl />
        </LeafletMap>
    )
  }
}
