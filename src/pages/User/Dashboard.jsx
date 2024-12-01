import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <p>Please login or sign up first.</p>;
    }

    return (
        <div>
            <h2>Welcome to your Dashboard!</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    );
};

export default Dashboard;
