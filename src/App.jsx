import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainApp from "./pages/MainApp";
import Donation from "./components/Donation";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserApp from "./pages/UserApp";
import TransactionHistory from "./components/TransactionHistory";
import UserProfile from "./components/UserProfile";
import FoodMenu from "./components/FoodMenu";
import Login from "./pages/User/Signin";
import SignupUser from "./pages/User/Signup";
import RefreshHandler from "./components/RefreshHandler";
import Dashboard from "./pages/User/Dashboard";
import { UserProvider } from "./context/UserContext";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/signin" />;
  };

  return (
    <div className="full">
      <UserProvider >
      {/* This component handles refresh and authentication state */}
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        {/* Redirect root to the sign-in page */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Public routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/signinuser" element={<Login />} />
        <Route path="/signupuser" element={<SignupUser />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Private routes */}
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserApp />
            </PrivateRoute>
          }
        />

      </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
