import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedEstabelecimentoRoute = () => {
  const userType = localStorage.getItem('userType');
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (userType !== 'estabelecimento') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};