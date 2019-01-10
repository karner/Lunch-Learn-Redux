import React from 'react';
import { Map as LeafletMap, WMSTileLayer } from 'react-leaflet';
import LayersControl from './LayersControl';
import "../../Themes/theme.css";
import "../../Themes/leaflet.css";

const initialMapCenter = [48.063259, 16.363239];
const initialZoomLevel = 15;

export default class Map extends React.Component {
  render() {
    return (        
        <LeafletMap 
          center={initialMapCenter}
          zoom={initialZoomLevel}
          zoomControl={false}
          style={this.props.style}
          className={this.props.className}
          children
        >
          <LayersControl />
        </LeafletMap>
    )
  }
}
