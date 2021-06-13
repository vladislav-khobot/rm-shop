import { initialState } from 'store/initialState';

import { commonActions } from './actions';

function commonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case commonActions.COLORS_REFRESH:
      return {
        ...state,
        colors: payload.colors,
      };

    case commonActions.SIZES_REFRESH:
      return {
        ...state,
        sizes: payload.sizes,
      };

    case commonActions.CHARACTERS_REFRESH:
      return {
        ...state,
        characters: payload.characters,
      };

    case commonActions.GALLERY_REFRESH:
      return {
        ...state,
        gallery: payload.gallery,
      };

    case commonActions.UPDATE_CURRENT_COLOR:
      return {
        ...state,
        currentColor: payload.currentColor,
      };

    default: return state;
  }
}

export { commonReducer };
