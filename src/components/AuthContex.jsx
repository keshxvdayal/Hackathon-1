import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AUTH_API_URL = "http://192.168.43.221:8000/";

export const AuthProvider = ({ children }) => {
    const [loggedInName, setLoggedInName] = useState('');
    const [loggedInId, setLoggedInId] = useState('');

    useEffect(() => {
        const handleStorageChange = () => {
            setLoggedInName(localStorage.getItem('userName'));
            setLoggedInId(localStorage.getItem('userId'));
        };

        // Initial fetch from localStorage
        handleStorageChange();

        // Listen for localStorage changes
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const setUser = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}signup`, user);
            return response;
        } catch (error) {
            return error.response || { status: 500, message: 'Unknown error occurred' };
        }
    };

    const getUser = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}api/v1/auth/token/`, user);
            return response;
        } catch (error) {
            return error.response || { status: 500, message: 'Unknown error occurred' };
        }
    };

    return (
        <AuthContext.Provider
            value={{
                setUser,
                getUser,
                loggedInId,
                loggedInName,
                setLoggedInId,
                setLoggedInName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
