import { createSelector } from 'reselect';

const colors = (state) => state.colors;

export const selectColors = createSelector(
  [colors],
  (colors) => colors,
);

const sizes = (state) => state.sizes;

export const selectSizes = createSelector(
  [sizes],
  (sizes) => sizes,
);

const characters = (state) => state.characters;

export const selectCharacters = createSelector(
  [characters],
  (characters) => characters,
);

const gallery = (state) => state.gallery;

export const selectGallery = createSelector(
  [gallery],
  (gallery) => gallery,
);
