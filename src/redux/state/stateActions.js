//import axios from 'axios';

import {
  FETCH_STATE_REQUEST,
  FETCH_STATE_SUCCESS,
  FETCH_STATE_FAILURE,
} from './stateTypes';

export const stateRequest = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_STATE_REQUEST });
  };
};

export const filterPodcasts = ({ data }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_STATE_SUCCESS, payload: data });
  };
};

export const setErrorSearches = ({ error }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_STATE_FAILURE, payload: error });
  };
};
