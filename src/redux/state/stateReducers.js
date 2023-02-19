import {
  FETCH_STATE_REQUEST,
  FETCH_STATE_SUCCESS,
  FETCH_STATE_FAILURE,
} from './stateTypes';

const initialState = {
  loading: false,
  state: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        podcasts: action.payload,
      };
    case FETCH_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
