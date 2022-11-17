import React, { useState } from 'react';
import LocationSelector from '../components/map/locationSelector';
import Map from '../components/map/map';

function MapPage() {
  const [location, setLocation] = useState({
    name: 'India',
    latlng: [20, 77],
  });
  const z = 5;

  return (
    <div className="mapPage">
      <h1>
        This is the map
      </h1>
      <LocationSelector location={location} setLocation={setLocation} />
      <Map x={location.latlng[0]} y={location.latlng[1]} z={z} />
    </div>

  );
}

export default MapPage;
