import { initialState } from 'store/initialState';

const CHANGE_COLORS = 'CHANGE_COLORS';
const CHANGE_SIZES = 'CHANGE_SIZES';
const CHANGE_CHARACTERS = 'CHANGE_CHARACTERS';
const CHANGE_GALLERY = 'CHANGE_GALLERY';

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLORS:
      return {
        ...state,
        colors: action.colors,
      };

    case CHANGE_SIZES:
      return {
        ...state,
        sizes: action.sizes,
      };

    case CHANGE_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
      };

    case CHANGE_GALLERY:
      return {
        ...state,
        gallery: action.gallery,
      };

    default: return state;
  }
}

export { CHANGE_COLORS, CHANGE_SIZES, CHANGE_CHARACTERS, CHANGE_GALLERY, commonReducer };
