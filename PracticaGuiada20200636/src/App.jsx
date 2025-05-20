import { useState } from 'react';
import "./App.css";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Information from "./pages/Information";
import Dashboard from "./pages/dashboard"; // Corregido: 'Dashboard' en mayúscula
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicPage from "./pages/PublicPage"; // Nueva página pública

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Rutas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/information" element={<Information />} />
          </Route>
          
          {/* Ruta pública */}
          <Route path="/public" element={<PublicPage />} />
          
          <Route path="/home" element={
            <>
              <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
              <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <li><Link to="/">Login</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/information">Información</Link></li>
                  <li><Link to="/public">Página Pública</Link></li>
                </ul>
              </nav>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;