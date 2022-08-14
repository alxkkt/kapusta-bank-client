import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PublicRoute from 'shared/components/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AddTransactionPage = lazy(() => import('./pages/AddTransactionPage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));

const MyRoutes = () => {
  return (
    <Suspense fallback={<p>Please wait for some magic to be happened</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="auth" element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="/addtransaction" element={<AddTransactionPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
