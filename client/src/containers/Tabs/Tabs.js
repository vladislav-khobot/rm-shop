import React, { useCallback, useEffect, useState } from 'react';

import { ROUTES } from 'constants/routes';

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
      <Tab caption={ROUTES.gallery.caption} active={currentTab === ROUTES.gallery.caption} onClick={onClick} type={ROUTES.gallery.route} />
      <Tab caption={ROUTES.constructor.caption} active={currentTab === ROUTES.constructor.caption} onClick={onClick} type={ROUTES.constructor.route} />
      <Tab caption={ROUTES.orders.caption} active={currentTab === ROUTES.orders.caption} onClick={onClick} type={ROUTES.orders.route} />
    </StyledTabs>
  );
}

export { Tabs };
