import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ padding: '10px', background: '#ddd' }}>
        <Link to="/signinuser" style={{ margin: '10px' }}>Login</Link>
        <Link to="/signUpuser" style={{ margin: '10px' }}>Sign Up</Link>
        <Link to="/dashboard" style={{ margin: '10px' }}>Dashboard</Link>
    </nav>
);

export default Navbar;
