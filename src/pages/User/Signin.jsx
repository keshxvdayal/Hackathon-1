import React, { useState } from "react";
import { useAuthContext } from "../../components/AuthContex";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { loginUserSpecific } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUserSpecific(credentials);
        if (response.success) {
            navigate("/dashboard");
        } else {
            setError(response.error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign In</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
