//Global imports
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//Local imports
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true)
            await login(emailRef.current.value ,passwordRef.current.value);
            navigate('/', {replace : true})
        } catch {
            setError('Failed to login!');
        }
        setLoading(false)
    }

  return (
    <main className='signup-bg'>
        <form onSubmit={handleSubmit} className='signup-form'>
            <h1>LOGIN</h1>
            {error && <p className='error'>Error: {error}</p>}
            <label htmlFor="email">Email</label>
            <input type="text" id='email' ref={emailRef}/>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' ref={passwordRef}/>
            <button disabled={loading}>LOGIN</button>
            <p><small>Don't have an account? <Link to='/signup' className='react-router-link'>SIGN UP</Link></small></p>
        </form>
    </main>
  )
}

export default Login
