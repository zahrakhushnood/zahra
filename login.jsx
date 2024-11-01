import React from 'react'
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth ,provider } from "../firebase-config";
function Login() {
    const [email, setEamil] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleGoogleSignIn = async (e) =>{
        e.preventDefault();
        try{
            await signInWithPopup(auth,provider)
            alert('google sign in successfully')
        }
        catch (error){
            setError(error.message)
        }
    }

    const handlesignin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("signin successful")
        }
        catch (error) {
            setError(error.message)
        }
    };
  
    return (
        <div>Login
            <form onSubmit={handlesignin}>
                <input type='email' placeholder='email'
                    value={email} onChange={(e) => setEamil(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign In</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

    )
}

export default Login