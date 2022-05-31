import Autocomplete from "react-google-autocomplete";

function SearchAutoComplete({ setLatLng, setAddress }) {
  /*
This component needs to receive 2 states (address and lat/lng) to store the search result
*/

  return (
    <Autocomplete
      apiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}
      onPlaceSelected={(place) => {
        setLatLng(place.geometry.location.lat(), place.geometry.location.lng());
        setAddress(place.formatted_address);
      }}
      options={{
        types: ["address"],
      }}
    />
  );
}

export default SearchAutoComplete;
