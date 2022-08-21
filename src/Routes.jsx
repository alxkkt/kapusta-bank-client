import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PublicRoute from 'shared/components/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute';

import Loader from 'shared/components/Loader';
const AuthPage = lazy(() => import('./pages/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));

const MyRoutes = () => {
  return (
    <Suspense fallback={<Loader isEnabled={true} />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="auth" element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
