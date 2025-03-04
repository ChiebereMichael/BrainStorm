import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, getRedirectResult, onAuthStateChanged } from "firebase/auth"; 
import LandingPage from "../pages/LandingPage";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/dashboard/Layout";
import Gaming from "../pages/Gaming";
import Sidebar from "../components/dashboard/Sidebar";

function RouterPath() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const auth = getAuth();
    
    // Handle redirect result
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("User signed in via redirect:", result.user);
          navigate("/layout");
        }
      })
      .catch((error) => {
        console.error("Redirect Login Failed", error);
      });
    
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser ? "User logged in" : "No user");
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, [navigate]);

  // This function checks auth status and routes accordingly
  const handleLoginClick = () => {
    if (user) {
      navigate("/layout");
    } else {
      navigate("/signup");
    }
  };
console.log(user);


  return (
    <Routes>
      <Route path="/" element={<LandingPage onLoginClick={handleLoginClick} />} />
      <Route path="/landing" element={<LandingPage onLoginClick={handleLoginClick} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/layout" element={<Layout/>} />
      <Route path="/gaming" element={<Gaming/>} />
    </Routes>
  );
}

export default RouterPath;