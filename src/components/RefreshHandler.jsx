// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom"

// const RefreshHandler = ({setIsAuthenticated}) => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() =>{
//         if(localStorage.getItem('token')){
//             setIsAuthenticated(true);
//             if(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup'){
//                 navigate('/user', {replace: false});
//             }
//         }
//     },[location, navigate, setIsAuthenticated])
//   return (
//     null
//   )
// }

// export default RefreshHandler

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            if (['/', '/signin', '/signup'].includes(location.pathname)) {
                navigate('/user');
            }
        }
    }, [location, navigate, setIsAuthenticated]);

    return null; // No need to render anything
};

export default RefreshHandler;
