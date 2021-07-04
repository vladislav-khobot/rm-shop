const prefix = '[Common]';

export const TYPES = {
  COLORS_RELOAD: `${prefix} colors-reload`,
  COLORS_REFRESH: `${prefix} colors-refresh`,
  SIZES_RELOAD: `${prefix} sizes-reload`,
  SIZES_REFRESH: `${prefix} sizes-refresh`,
  CHARACTERS_RELOAD: `${prefix} characters-reload`,
  CHARACTERS_REFRESH: `${prefix} characters-refresh`,
  GALLERY_RELOAD: `${prefix} gallery-reload`,
  GALLERY_REFRESH: `${prefix} gallery-refresh`,
  CURRENT_COLOR_UPDATE: `${prefix} current-color-update`,
  CURRENT_TAB_UPDATE: `${prefix} current-tab-update`,
};

export const commonActions = {
  ...TYPES,

  colorsReload: () => ({
    type: TYPES.COLORS_RELOAD,
  }),
  colorsRefresh: (colors) => ({
    type: TYPES.COLORS_REFRESH,
    payload: {
      colors,
    },
  }),
  sizesReload: () => ({
    type: TYPES.SIZES_RELOAD,
  }),
  sizesRefresh: (sizes) => ({
    type: TYPES.SIZES_REFRESH,
    payload: {
      sizes,
    },
  }),
  charactersReload: () => ({
    type: TYPES.CHARACTERS_RELOAD,
  }),
  charactersRefresh: (characters) => ({
    type: TYPES.CHARACTERS_REFRESH,
    payload: {
      characters,
    },
  }),
  galleryReload: () => ({
    type: TYPES.GALLERY_RELOAD,
  }),
  galleryRefresh: (gallery) => ({
    type: TYPES.GALLERY_REFRESH,
    payload: {
      gallery,
    },
  }),
  currentColorUpdate: (currentColor) => ({
    type: TYPES.CURRENT_COLOR_UPDATE,
    payload: {
      currentColor,
    },
  }),
  currentTabUpdate: (currentTab) => ({
    type: TYPES.CURRENT_TAB_UPDATE,
    payload: {
      currentTab,
    },
  }),
};
