import { FAVORITE_UPDATE_VALUE, REMOVE_ITEM } from '../actions/actionTypes';



export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case FAVORITE_UPDATE_VALUE:

      return [
        ...state,
        action.newValue
      ];

    case REMOVE_ITEM:
      return state.filter(val => val !== action.newValue);

    default:
      return state;
  }
}
