import axios from "axios";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils/authUtils"
import { useAuthContex } from "../components/AuthContex"
import { Link, useNavigate } from "react-router-dom"


const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
 


  const { getUser,setLoggedInId,setLoggedInName } = useAuthContex();
  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { email, password } = signinInfo;

  const handleInput = (name) => (e) => {
    setSigninInfo({ ...signinInfo, [name]: e.target.value }
    )
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError("Email and Password are requried");
    }
    try {
      const result = await getUser(signinInfo);
      const { success, message, error, name, jwtToken, id } = result.data;
      console.log(result.data);
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('userName', name);
        localStorage.setItem('userId', id);
        setLoggedInName(localStorage.getItem('userName'));
        setLoggedInId(localStorage.getItem('userId'));
      setTimeout(() => {
        navigate('/user');
      }, 2000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error)
    }

  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Send POST request with login credentials
  //     const response = await axios.post('http://192.168.43.221:8000/api/v1/auth/token/', { email, password });

  //     // Assuming the response contains a JWT token
  //     const { token } = response.data;

  //     // Store the token in localStorage
  //     localStorage.setItem('token', token);

  //     // Redirect to a protected route, e.g., Dashboard
  //    // Or use React Router to navigate
  //   } catch (err) {
  //     setError('Invalid credentials. Please try again.');
  //   }
  // };


  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full ">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            name='email'
            onChange={handleInput('email')}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name = "password"
            value={password}
            onChange={handleInput('password')}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={handleSubmit}
          className="text-green-600 hover:underline"
        >
          Signup
        </button>
      </p>
    </div>
    </div>
  );
};

export default SignIn
