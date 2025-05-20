import React, { createContext, useState, useContext } from "react";

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  // Estado para manejar si el usuario está autenticado
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Estado para guardar el email del usuario autenticado
  const [user, setUser] = useState("");

  // Función para iniciar sesión
  const Login = (email, password) => {
    // Aquí podrías hacer una llamada a una API real
    // Para este ejemplo, aceptamos cualquier email con una contraseña "123456"
    if (password === "123456") {
      setIsLoggedIn(true);
      setUser(email);
      return true;
    }
    return false;
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsLoggedIn(false);
    setUser("");
    return true;
  };

  // Proporcionamos los valores del contexto
  const value = {
    isLoggedIn,
    user,
    Login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};