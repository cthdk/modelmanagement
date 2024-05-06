import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
                const decoded = jwtDecode(jwt)
                const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
                localStorage.setItem('role', role);
                navigate('/homepage');

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