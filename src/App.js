import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
// import {
//   getGeocode,
//   getLatLng,
// } from 'use-places-autocomplete';
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption
// } from '@reach/combobox';
import '@reach/combobox/styles.css';

const libraries = ['places'];
function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps...';
  return <div>map</div>;
}

export default App;
