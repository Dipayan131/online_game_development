import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProductPage = lazy(() => import('@/pages/ProductPage'));

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
          </Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRouter;
