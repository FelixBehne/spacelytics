import Map, {
  GeolocateControl,
  Layer,
  NavigationControl,
  ScaleControl,
  Source
} from 'react-map-gl';

import data from '../../public/data/features_2000.json';
import { useState } from 'react';

const Mapbox_Access_Token = process.env.NEXT_PUBLIC_MapboxAccessToken;

export default function MapComponent() {
  return (
    <Map
      initialViewState={{
        latitude: -1.9444,
        longitude: 30.0616,
        zoom: 1,
        pitch: 2
      }}
      style={{ width: '100vw', height: '100vh' }}
      minPitch={0}
      maxPitch={85}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={Mapbox_Access_Token}
    >
      {/* <> */}
      {/* <Source type="geojson" data={data}>
          <Layer
            id="point"
            type="circle"
            paint={{
              'circle-radius': 2,
              'circle-color': '#FF0000'
            }}
          />
        </Source> */}
      {/* <a>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            position="bottom-right"
          />
          <div>
            <ScaleControl />
          </div>
          <div>
            <NavigationControl position="bottom-right" visualizePitch={true} />
          </div>
        </a>
      </> */}
    </Map>
  );
}
