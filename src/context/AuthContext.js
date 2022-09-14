import React, { useState, useEffect, useContext, createContext } from "react";
import { FirebaseContext } from "./FirebaseContext";

const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { firebase } = useContext(FirebaseContext);

  const signin = ({ email, password, callback }) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        callback();
        return response.user;
      });
  };

  const signup = ({ email, password, callback }) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        callback();
        return response.user;
      });
  };

  const signout = () => {
    console.log(firebase.auth());

    firebase
      .auth()
      .signout()
      .then(() => {
        setUser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [firebase]);

  return {
    isLoading,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
