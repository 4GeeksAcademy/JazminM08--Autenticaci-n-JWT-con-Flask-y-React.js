import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/signup">Registro</Link> | 
      <Link to="/login">Iniciar sesión</Link> | 
      <Link to="/private">Privado</Link>
      {user && <button onClick={logout}>Cerrar sesión</button>}
    </nav>
  );
};

export default Navbar;