// Updated AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AUTH_API_URL = "http://192.168.43.221:8000/";

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
        }
    }, []);

    const loginUser = async (credentials) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}api/v1/auth/token/`, credentials);
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
            setAccessToken(access);
            setRefreshToken(refresh);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.response?.data || 'Login failed' };
        }
    };

    const refreshAccessToken = async () => {
        try {
            const response = await axios.post(`${AUTH_API_URL}api/v1/auth/token/refresh/`, {
                refresh: refreshToken,
            });
            const { access } = response.data;
            localStorage.setItem('accessToken', access);
            setAccessToken(access);
        } catch (error) {
            console.error('Failed to refresh token', error);
            logoutUser();
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAccessToken('');
        setRefreshToken('');
    };

    const authAxios = axios.create();

    authAxios.interceptors.request.use(
        async (config) => {
            if (!accessToken) return config;

            const isExpired = jwtDecode(accessToken).exp * 1000 < Date.now();
            if (isExpired) await refreshAccessToken();

            config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
            return config;
        },
        (error) => Promise.reject(error)
    );

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, authAxios }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
