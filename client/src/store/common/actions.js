import { CHANGE_COLORS, CHANGE_SIZES, CHANGE_CHARACTERS, CHANGE_GALLERY } from 'store/common/reducer';

export function actionChangeColors(colors) {

  return {
    type: CHANGE_COLORS,
    colors,
  };
}

export function actionChangeSizes(sizes) {

  return {
    type: CHANGE_SIZES,
    sizes,
  };
}

export function actionChangeCharacters(characters) {

  return {
    type: CHANGE_CHARACTERS,
    characters,
  };
}

export function actionChangeGallery(gallery) {

  return {
    type: CHANGE_GALLERY,
    gallery,
  };
}
