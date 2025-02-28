import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function RouterPath() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // 🔥 Track user state

  useEffect(() => {
    const auth = getAuth();

    // 🔥 Listen for login state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("User is signed in:", user);
        navigate("/dashboard"); // ✅ Redirect user to Dashboard
      } else {
        setUser(null);
        console.log("No user signed in.");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
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
