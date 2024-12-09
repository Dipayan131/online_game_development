import { Outlet } from 'react-router-dom';
import { Container, VStack } from '@/components/shared/AppStyles';

import React from 'react';

function Layout() {
  return (
    <VStack.colg2>
      <Outlet />
    </VStack.colg2>
  );
}

export default Layout;
