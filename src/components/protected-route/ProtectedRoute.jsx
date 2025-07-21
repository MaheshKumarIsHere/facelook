import { useAuth } from "../../context/auth/AuthContext";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default ProtectedRoute;
