import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AllClients from './pages/AllClients';
import BlockedClients from './pages/BlockedClients';
import CreateClient from './pages/CreateClient';
import Loans from './pages/Loans';
import Scoring from './pages/Scoring';
import Settings from './pages/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/clients/all" element={<AllClients />} />
          <Route path="/clients/blocked" element={<BlockedClients />} />
          <Route path="/clients/create" element={<CreateClient />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/scoring" element={<Scoring />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;