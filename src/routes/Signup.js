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
    <main>
        <form onSubmit={handleSubmit}>
            {error && <p>Error: {error}</p>}
            <label htmlFor="email">Email</label>
            <input type="text" id='email' ref={emailRef}/>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' ref={passwordRef}/>
            <label htmlFor="passwordConfim">Password Confirmation</label>
            <input type="password" id='passwordConfim' ref={passwordConfirmRef}/>
            <button disabled={loading}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Sign In</Link></p>
        </form>
    </main>
  )
}

export default Signup
