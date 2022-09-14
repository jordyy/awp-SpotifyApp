import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const NavigationBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  if (isLoggedIn) {
    return (
      <header className="NavigationBar">
        <nav>
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>›
          <ul>
            <Link to="/webapp">
              <li>Open Web App</li>
            </Link>
            <li onClick={logout}>Logout</li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="NavigationBar">
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/signup">
              <li>Sign Up</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
};

export default NavigationBar;
