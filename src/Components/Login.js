/* import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


export function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const url = 'http://localhost:7181/api/account/login'; 
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const { jwt } = await response.json();
                localStorage.setItem('token', jwt);
                history.push('/create-new-model');
                // Redirect or do something else after successful login
            } else {
                const errorMessage = await response.text();
                alert('Server returned: ' + errorMessage);
            }
        } catch (err) {
            alert('Error: ' + err);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Adgangskode" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Log ind</button>
        </form>
    );
};

export default Login;
 */