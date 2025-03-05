import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, getRedirectResult, onAuthStateChanged } from "firebase/auth"; 
import LandingPage from "../pages/LandingPage";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/dashboard/Layout";
import Gaming from "../pages/Gaming";
import Development from "../pages/Development";
import Research from "../pages/Research";
import MyPosts from "../pages/MyPosts";
import Settings from "../pages/Settings";


function RouterPath() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const auth = getAuth();
    
    // Handle redirect result
    getRedirectResult(auth)
      .then((result) => {
        if (result.user) {
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

  // // This function checks auth status and routes accordingly
  // const handleLoginClick = () => {
  //   if (user) {
  //     navigate("/layout");
  //   } else {
  //     navigate("/signup");
  //   }
  // };
console.log(user);


  return (
    <Routes>
      <Route path="/" element={<LandingPage onLoginClick={getRedirectResult} />} />
      <Route path="/landing" element={<LandingPage onLoginClick={getRedirectResult} />} />
      <Route path="/signup" element={<Signup />} />
       {/* Dashboard Routes */}
       <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="development" element={<Development/>} />
          <Route path="research" element={<Research/>} />
          <Route path="myposts" element={<MyPosts/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
    </Routes>
  );
}

export default RouterPath;