import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/loans')
      .then(response => setClients(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Clients</h1>
      <ul className="list-group">
        {clients.map(client => (
          <li key={client.id} className="list-group-item">
            client name here {client.name} - {client.email} {client.blocked ? '(Blocked)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllClients;