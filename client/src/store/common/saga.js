import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CommonService } from 'services/CommonService';

import { commonActions } from './actions';

function* colorsReload() {
  const colors = yield call(CommonService.getColors);
  yield put(commonActions.colorsRefresh(colors));
}

function* sizesReload() {
  const sizes = yield call(CommonService.getSizes);
  yield put(commonActions.sizesRefresh(sizes));
}

function* charactersReload() {
  const characters = yield call(CommonService.getCharacters);
  yield put(commonActions.charactersRefresh(characters));
}

function* galleryReload() {
  const gallery = yield call(CommonService.getGallery);
  yield put(commonActions.galleryRefresh(gallery));
}

export function* commonSaga() {
  yield all([
    takeLatest(commonActions.COLORS_RELOAD, colorsReload),
    takeLatest(commonActions.SIZES_RELOAD, sizesReload),
    takeLatest(commonActions.CHARACTERS_RELOAD, charactersReload),
    takeLatest(commonActions.GALLERY_RELOAD, galleryReload),
  ]);
}
