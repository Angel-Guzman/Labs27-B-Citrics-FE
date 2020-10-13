//this page stores the actions for the state management, specifically the searched cities

import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const getCityInfo = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_START' });
    axios
      .get('insert BE endpoint here')
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_FAIL', payload: `${err}` });
      });
  };
};

export const addCity = input => {
  return dispatch => {
    console.log('save city request:', input);
    dispatch({ type: 'SAVE_CITY', payload: input });
  };
};

export const addMarker = ({ lat, lng, cityName }) => {
  return dispatch => {
    console.log(`City Marked: lat: ${lat}, lng: ${lng}, cityName: ${cityName}`);
    dispatch({ type: 'SAVE_MARKER', payload: { lat, lng, cityName } });
  };
};