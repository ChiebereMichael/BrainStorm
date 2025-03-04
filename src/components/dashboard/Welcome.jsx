import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Welcome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <div>
        {user ? (
          <h1 className="text-textGreen text-base pl-6 mt-4">
            Welcome, {user.displayName}!
          </h1>
        ) : (
          <h1>Please log in</h1>
        )}
      </div>
    </div>
  );
}

export default Welcome;
