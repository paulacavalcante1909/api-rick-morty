import { favoriteReducer } from './favoriteReducer';
import { searchReducer } from './searchReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  favoriteState: favoriteReducer,
  searchState: searchReducer,
});
