import React from 'react';
import { TileLayer, LayersControl } from 'react-leaflet'
import { GoogleLayer } from 'react-leaflet-google';
import { BingLayer } from 'react-leaflet-bing';


export default class Map extends React.Component {
  render (){
    const { BaseLayer } = LayersControl;

    const google_terrain = 'TERRAIN';
    const google_road = 'ROADMAP';
    const google_satellite = 'SATELLITE';
    const google_hybrid = 'HYBRID';

    const bing_road = 'Road';

    const google_key = 'AIzaSyD5I6XmlMQWemLfp5IC_soED3GXmkp0Y3w';
    const bing_key = 'AsU0zyir1PBJdg00Zm5E9uAIOcgWYjhCnh9usexyJG7ORGx6IeRwP7tat3jGl0XG';

    return(
        <LayersControl position='bottomright'>
            <BaseLayer  name='OpenStreetMap.Mapnik'>
                <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </BaseLayer>
            <BaseLayer checked name='Google Maps Roads'>
                <GoogleLayer googlekey={google_key} maptype={google_road} />
            </BaseLayer>
            <BaseLayer name='Google Maps Terrain'>
                <GoogleLayer googlekey={google_key} maptype={google_terrain} />
            </BaseLayer>
            <BaseLayer  name='Google Maps Satellite'>
                <GoogleLayer googlekey={google_key} maptype={google_satellite} />
            </BaseLayer>
                <BaseLayer  name='Google Maps Hybrid'>
                <GoogleLayer googlekey={google_key} maptype={google_hybrid} />
            </BaseLayer>  
            <BaseLayer  name='Google Maps with Libraries'>
                <GoogleLayer googlekey={google_key} maptype={google_hybrid} libraries={['geometry', 'places']} />
            </BaseLayer>        
            <BaseLayer checked name='Bing Maps Roads'>
                <BingLayer  bingkey={bing_key} type={bing_road} />
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Satelite'>
                <BingLayer  bingkey={bing_key} />
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Satelite with Labels'>
                <BingLayer  bingkey={bing_key} type="AerialWithLabels" />
            </BaseLayer>
        </LayersControl>
    );
  }
}
