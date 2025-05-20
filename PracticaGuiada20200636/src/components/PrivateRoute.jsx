import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  
  // Si el usuario no está autenticado, redirige a la página de inicio
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;