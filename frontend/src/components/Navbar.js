import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Loan Organization System</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="clientsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Clients
              </Link>
              <ul className="dropdown-menu" aria-labelledby="clientsDropdown">
                <li><Link className="dropdown-item" to="/clients/all">All Clients</Link></li>
                <li><Link className="dropdown-item" to="/clients/blocked">Blocked Clients</Link></li>
                <li><Link className="dropdown-item" to="/clients/create">Create Client</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loans">Loans</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scoring">Scoring</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;