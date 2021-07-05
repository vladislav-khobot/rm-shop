import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentTab } from 'store/common/selectors';
import { commonActions } from 'store/common/actions';
import { TAB_TITLES, TAB_TYPES } from 'constants/routes';

import { Tab } from 'components/Tab';
import { StyledTabs } from './Tabs.style';

function Tabs() {
  const currentTab = useSelector(selectCurrentTab);
  const dispatch = useDispatch();

  const onClick = useCallback((caption) => {
    dispatch(commonActions.currentTabUpdate(caption));
  }, [dispatch]);

  return (
    <StyledTabs data-testid="tabs">
      <Tab caption={TAB_TITLES.gallery} active={currentTab === TAB_TITLES.gallery} onClick={onClick} type={TAB_TYPES.gallery} />
      <Tab caption={TAB_TITLES.constructor} active={currentTab === TAB_TITLES.constructor} onClick={onClick} type={TAB_TYPES.constructor} />
      <Tab caption={TAB_TITLES.orders} active={currentTab === TAB_TITLES.orders} onClick={onClick} type={TAB_TYPES.orders} />
    </StyledTabs>
  );
}

export { Tabs };
