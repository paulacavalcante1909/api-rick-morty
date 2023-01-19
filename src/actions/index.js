import { FAVORITE_UPDATE_VALUE,SEARCH_UPDATE_VALUE,REMOVE_ITEM} from './actionTypes';

export const favoriteButton = value => ({
  type: FAVORITE_UPDATE_VALUE,
  newValue: value
});

export const unfavoriteCharacter = value => ({
  type: REMOVE_ITEM,
  newValue: value
});


export const searchCharacter = value => ({
  type: SEARCH_UPDATE_VALUE,
  newValue: value
});




