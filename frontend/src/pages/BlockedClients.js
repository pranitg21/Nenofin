import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateClient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [blocked, setBlocked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/clients', { name, email, blocked })
      .then(() => navigate('/clients/all'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create Client</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" checked={blocked} onChange={(e) => setBlocked(e.target.checked)} />
          <label className="form-check-label">Blocked</label>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateClient;