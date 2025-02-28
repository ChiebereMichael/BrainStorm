import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, getRedirectResult } from "firebase/auth"; 
import LandingPage from "../pages/LandingPage";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

function RouterPath() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("User signed in:", result.user);
          navigate("/dashboard"); // ✅ Redirect user after login
        }
      })
      .catch((error) => console.error("Redirect Login Failed", error));
  }, [navigate]);

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RouterPath;
