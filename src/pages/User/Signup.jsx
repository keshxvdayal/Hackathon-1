import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Signup = () => {
    const { setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const navigate = useNavigate();

    const handleSignup = () => {
        // Save the user data and redirect to Dashboard
        setUser(formData);
        navigate('/dashboard');
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
