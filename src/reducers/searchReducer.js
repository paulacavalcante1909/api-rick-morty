import { SEARCH_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  newValue: ''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
}