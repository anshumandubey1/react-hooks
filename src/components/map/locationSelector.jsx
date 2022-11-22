import PropTypes from 'prop-types';
import Dropdown from '../ui/Dropdown/Dropdown';
import geoJSONData from '../../constants/custom.geo.json';

export function getGeoJSON(name) {
  for (let i = 0; i < geoJSONData.features.length; i += 1) {
    if (geoJSONData.features[i].properties.name_long === name) {
      // console.log({ json: geoJSONData.features[i] });
      return geoJSONData.features[i];
    }
    // console.log(geoJSONData.features[i].properties.postal)
  }
  // console.log('GeoJSON not found for', name);
  return null;
}

function LocationSelector({ locations, setLocations }) {
  const changeLocation = (values) => {
    const geoJSONs = values.map((x) => getGeoJSON(x));
    // console.log({ value, geoJSON });
    setLocations(geoJSONs);
  };

  return (
    <Dropdown
      current={locations.map((x) => x.properties.name_long)}
      options={geoJSONData.features.map((x) => x.properties.name_long)}
      onChange={changeLocation}
    />
  );
}

LocationSelector.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setLocations: PropTypes.func.isRequired,
};

export default LocationSelector;
