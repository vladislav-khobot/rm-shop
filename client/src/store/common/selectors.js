import { createSelector } from 'reselect';

const colors = (state) => state.Common.colors;
export const selectColors = createSelector(
  [colors],
  (colors) => colors,
);

const sizes = (state) => state.Common.sizes;
export const selectSizes = createSelector(
  [sizes],
  (sizes) => sizes,
);

const characters = (state) => state.Common.characters;
export const selectCharacters = createSelector(
  [characters],
  (characters) => characters,
);

const gallery = (state) => state.Common.gallery;
export const selectGallery = createSelector(
  [gallery],
  (gallery) => gallery,
);

const currentColor = (state) => state.Common.currentColor;
export const selectCurrentColor = createSelector(
  [currentColor],
  (currentColor) => currentColor,
);

const currentSize = (state) => state.Common.currentSize;
export const selectCurrentSize = createSelector(
  [currentSize],
  (currentSize) => currentSize,
);

const currentImage = (state) => state.Common.currentImage;
export const selectCurrentImage = createSelector(
  [currentImage],
  (currentImage) => currentImage,
);

const currentTab = (state) => state.Common.currentTab;
export const selectCurrentTab = createSelector(
  [currentTab],
  (currentTab) => currentTab,
);
