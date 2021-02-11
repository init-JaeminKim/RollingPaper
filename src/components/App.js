import { useState, useEffect } from "react";
import { authService } from "../Instance";
import AppRouter from "./AppRouter";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {isLoaded ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default App;
