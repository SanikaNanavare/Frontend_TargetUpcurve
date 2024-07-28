import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            userId,
            userName,
            email,
            password,
            type
        };

        try {
            const response = await axios.post('http://localhost:5000/register', userData);
            console.log('Success:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Request Error:', error);
            if (error.response) {
                console.error('Error response:', error.response.data);
                alert('Registration failed: ' + (error.response.data.message || 'Unknown error'));
            } else if (error.request) {
                console.error('Error request:', error.request);
                alert('Registration failed: Network error');
            } else {
                console.error('Error message:', error.message);
                alert('Registration failed: ' + error.message);
            }
        }
    };

    return (
        <div className="container">
            <div className="addUser">
                <h3>Register Here</h3>
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="userId">User ID</label>
                        <input
                            type="text"
                            placeholder="User ID"
                            id="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            autoComplete='off'
                        />

                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            placeholder="User Name"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <label htmlFor="UserRole">UserRole</label>
                        <select id="UserRole" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>

                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
