import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [error, setError] = useState('');
    const { logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            
        } catch {
            setError('Failed to log out');
        }
    }

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p>Error: {error}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
