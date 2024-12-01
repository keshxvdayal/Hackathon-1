import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RefreshHandler = ({ setIsAuthenticated }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Assuming isValidToken is a function you define to check token validity
            if (isValidToken(token)) {
                setIsAuthenticated(true);
                if (['/', '/signin', '/signup'].includes(location.pathname)) {
                    navigate('/user');
                }
            } else {
                setIsAuthenticated(false);
                navigate('/signin');  // Redirect to sign-in if token is invalid
            }
        } else {
            setIsAuthenticated(false);
            // Redirect to sign-in if no token exists
            if (!['/signin', '/signup'].includes(location.pathname)) {
                navigate('/signin');
            }
        }
    }, [location, navigate, setIsAuthenticated]);

    return null; // No need to render anything
};

// Add Prop Types for validation (optional but good practice)
RefreshHandler.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired
};

export default RefreshHandler;
