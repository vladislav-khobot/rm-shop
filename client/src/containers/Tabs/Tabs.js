import React, { useCallback, useEffect, useState } from 'react';

import { TAB_TITLES, TAB_TYPES } from 'constants/routes';

import { Tab } from 'components/Tab';
import { StyledTabs } from './Tabs.style';

function Tabs() {
  const [currentTab, setCurrentTab] = useState('');

  const onClick = useCallback((caption) => {
    setCurrentTab(caption);
  }, [setCurrentTab]);

  useEffect(() => {
    setCurrentTab('Gallery');
  }, []);

  return (
    <StyledTabs data-testid="tabs">
      <Tab caption={TAB_TITLES.gallery} active={currentTab === TAB_TITLES.gallery} onClick={onClick} type={TAB_TYPES.gallery} />
      <Tab caption={TAB_TITLES.constructor} active={currentTab === TAB_TITLES.constructor} onClick={onClick} type={TAB_TYPES.constructor} />
      <Tab caption={TAB_TITLES.orders} active={currentTab === TAB_TITLES.orders} onClick={onClick} type={TAB_TYPES.orders} />
    </StyledTabs>
  );
}

export { Tabs };
