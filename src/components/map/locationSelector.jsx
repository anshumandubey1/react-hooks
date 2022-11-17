import PropTypes from 'prop-types';
import countries from '../../constants/countries.json';
import Dropdown from '../ui/Dropdown/Dropdown';

function LocationSelector({ location, setLocation }) {
  const changeLocation = (value) => {
    console.log({value, loc: countries[value]});
    setLocation(countries[value]);
  };

  return (
    <Dropdown
      current={location.name}
      options={Object.keys(countries)}
      onChange={changeLocation}
    />
  );
}

LocationSelector.propTypes = {
  location: PropTypes.shape(
    { name: PropTypes.string, lat: PropTypes.number, lng: PropTypes.number },
  ).isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default LocationSelector;
