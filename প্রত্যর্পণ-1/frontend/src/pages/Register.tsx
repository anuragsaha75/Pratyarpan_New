import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../utils/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        if (profilePhoto) {
            formData.append('profilePhoto', profilePhoto);
        }

        try {
            await registerUser(formData);
            history.push('/'); // Redirect to home after successful registration
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Profile Photo:</label>
                    <input
                        type="file"
                        onChange={(e) => setProfilePhoto(e.target.files[0])}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;