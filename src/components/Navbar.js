import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { HiLogout } from 'react-icons/hi'

function Navbar() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            
        } catch {
            setError('Failed to log out');
        }
    }

  return (
    <nav>
        <ul>
            <li className='nav-logo'><h3>ELECTRIFY</h3><h3 className='red-text'>AUSSIES</h3></li>
            <li className='nav-profile'>
                <p>{currentUser && currentUser.email}</p>
                <HiLogout onClick={handleLogout} className='nav-logout'/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
