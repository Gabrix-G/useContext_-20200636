import React from "react";
import { Link } from "react-router-dom";
import "./PublicPage.css";

const PublicPage = () => {
  return (
    <div className="public-container">
      <div className="public-card">
        <h1 className="public-title">Página Pública</h1>
        <p className="public-text">
          Esta es una página pública que cualquier usuario puede ver sin necesidad de autenticación.
        </p>
        <div className="public-navigation">
          <p>¿Qué deseas hacer?</p>
          <div className="public-links">
            <Link to="/" className="public-link">Iniciar sesión</Link>
            <Link to="/information" className="public-link">Ver información (protegido)</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicPage;