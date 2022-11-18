import PropTypes from 'prop-types';
import Dropdown from '../ui/Dropdown/Dropdown';
import geoJSONData from '../../constants/custom.geo.json';

export function getGeoJSON(name) {
  for(let i = 0; i < geoJSONData.features.length; i++) {
    if (geoJSONData.features[i].properties.name_long === name) {
      console.log({json: geoJSONData.features[i]})
      return geoJSONData.features[i];
    } else {
      // console.log(geoJSONData.features[i].properties.postal)
    }
  }
  console.log('GeoJSON not found for', name);
  return null;
}

function LocationSelector({ location, setLocation }) {
  const changeLocation = (value) => {
    const geoJSON = getGeoJSON(value);
    console.log({value, geoJSON});
    setLocation(geoJSON);
  };

  return (
    <Dropdown
      current={location.properties.name_long}
      options={geoJSONData.features.map(x => x.properties.name_long)}
      onChange={changeLocation}
    />
  );
}

LocationSelector.propTypes = {
  location: PropTypes.shape().isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default LocationSelector;
