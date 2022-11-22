import React, { useState } from 'react';
import LocationSelector, { getGeoJSON } from '../components/map/locationSelector';
import Map from '../components/map/map';

function MapPage() {
  const [locations, setLocations] = useState([getGeoJSON('India')]);

  return (
    <div className="mapPage">
      <h1>
        This is the map
      </h1>
      <LocationSelector locations={locations} setLocations={setLocations} />
      <Map locations={locations} />
    </div>

  );
}

export default MapPage;
