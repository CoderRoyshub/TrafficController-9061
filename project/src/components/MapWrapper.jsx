import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import { API_KEYS } from '../config/apiConfig';

const libraries = ['places', 'geometry', 'directions'];

function MapWrapper({ children }) {
  return (
    <LoadScript googleMapsApiKey={API_KEYS.GOOGLE_MAPS} libraries={libraries}>
      {children}
    </LoadScript>
  );
}

export default MapWrapper;