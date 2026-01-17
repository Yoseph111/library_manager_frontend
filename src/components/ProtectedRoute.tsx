import { Navigate } from 'react-router-dom';
import { useAppSelector } from "../hooks/useRedux.ts";
import type { JSX } from 'react/jsx-dev-runtime';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;