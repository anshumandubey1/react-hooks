import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './map.css';
import {
  MapContainer, TileLayer, useMap, GeoJSON, Circle, Tooltip
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapHandler({ latlng, z }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(latlng, z);
  }, [latlng, z]);
  return null
}

function Label({position, text, value}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timeInterval = 30;
    const totalTime = 2000;
    let start = 0;
    const myInterval = setInterval(() => {
      start += Math.ceil(timeInterval*value/totalTime);
      // console.log({start, value, count})
      
      if(start >= value) {
        setCount(value);
        clearInterval(myInterval);
      } else {
        setCount(start);
      }
    }, timeInterval)

    return () => {
      clearInterval(myInterval);
    }
  }, [value])
  
  return (
    <Circle center={position} radius={0} opacity={0}>
      <Tooltip direction="bottom" opacity={1} permanent className='label'>{text}: {count.toLocaleString()}</Tooltip>
    </Circle>
  )
}

function Map({ location }) {
  const x = location.properties.label_y;
  const y = location.properties.label_x;
  const z = 6;

  console.log({location, z})
  return (
    <MapContainer center={[x, y]} zoom={z} scrollWheelZoom={false}>
      <MapHandler latlng={[x, y]} z={z} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON key={location.properties.name_long} data={location}/>
      <Label position={[x, y]} text={'Population'} value={location.properties.pop_est}/>
    </MapContainer>
  );
}

Map.propTypes = {
  location: PropTypes.shape().isRequired
};

export default Map;
