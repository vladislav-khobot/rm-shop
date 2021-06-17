import React, { useCallback, useState } from 'react';

import { StyledTabs } from 'containers/Tabs/Tabs.style';
import { Tab } from 'components/Tab';

function Tabs() {
  const [currentTab, setCurrentTab] = useState('');

  const onClick = useCallback((caption) => {
    setCurrentTab(caption);
  }, [setCurrentTab]);

  return (
    <StyledTabs data-testid="tabs">
      <Tab caption="Gallery" active={currentTab === 'Gallery'} onClick={onClick} exact to="/gallery" />
      <Tab caption="Constructor" active={currentTab === 'Constructor'} onClick={onClick} exact to="constructor" />
      <Tab caption="Orders" active={currentTab === 'Orders'} onClick={onClick} exact to="orders" />
    </StyledTabs>
  );
}

export { Tabs };
