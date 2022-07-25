//Global imports
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//Local imports
import { useAuth } from '../contexts/AuthContext';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        //If passwords do not match, update error value and exit function
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!');
        }

        //If checks passed then try creating account
        try {
            setError('');
            setLoading(true)
            await signup(emailRef.current.value ,passwordRef.current.value);
        //If creating account fails, catch and change error message
        } catch {
            setError('Failed to create an account!');
        }
        setLoading(false)
    }

  return (
    <main className='signup-bg'>
        <form onSubmit={handleSubmit} className='signup-form'>
            <h1>SIGN UP</h1>
            {error && <p className='error'>Error: {error}</p>}
            <label htmlFor="email">Email</label><br/>
            <input type="text" id='email' ref={emailRef}/><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password" id='password' ref={passwordRef}/><br/>
            <label htmlFor="passwordConfim">Confirm Password</label><br/>
            <input type="password" id='passwordConfim' ref={passwordConfirmRef}/><br/>
            <button disabled={loading}>SIGN UP</button>
            <p><small>Already have an account? <Link to='/login' className='react-router-link'>LOGIN</Link></small></p>
        </form>
    </main>
  )
}

export default Signup
