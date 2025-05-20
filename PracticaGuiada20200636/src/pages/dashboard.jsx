import React from "react";
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// dashboard.jsx
const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    if (logout()) {
      navigate("/");
    }
  };
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">¡Bienvenido al Dashboard!</h1>
        <p className="dashboard-user">
          Hola, <span>{user || "Usuario logueado"}</span>
        </p>
        <button className="dashboard-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;