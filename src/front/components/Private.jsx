import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate } from "react-router-dom";

const API_URL = "http://localhost:3001";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Si no hay usuario logueado, redirige a login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Aquí ya puedes usar user.email sin error porque user existe
  return (
    <div>
      <h1>Bienvenido, {user.email}</h1>
      {children}
    </div>
  );
};

export default Private;