import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <p className="text-lg text-gray-600">Please login or sign up first.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Welcome to your Dashboard!
                </h2>
                <div className="space-y-4">
                    <p className="text-lg text-gray-600">
                        <span className="font-medium text-gray-800">Name:</span> {user.name}
                    </p>
                    <p className="text-lg text-gray-600">
                        <span className="font-medium text-gray-800">Email:</span> {user.email}
                    </p>
                    <p className="text-lg text-gray-600">
                        <span className="font-medium text-gray-800">Phone:</span> {user.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
