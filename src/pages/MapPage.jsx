import React, { useState } from 'react';
import LocationSelector, { getGeoJSON } from '../components/map/locationSelector';
import Map from '../components/map/map';

function MapPage() {
  const [location, setLocation] = useState(getGeoJSON('India'));
  const z = 5;

  return (
    <div className="mapPage">
      <h1>
        This is the map
      </h1>
      <LocationSelector location={location} setLocation={setLocation} />
      <Map location={location} z={z} />
    </div>

  );
}

export default MapPage;
