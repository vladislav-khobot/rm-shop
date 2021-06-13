import { all, fork } from 'redux-saga/effects';

import { commonSaga } from 'store/common/saga';

export function* rootSaga() {

  yield all([
    fork(commonSaga),
  ]);
}
