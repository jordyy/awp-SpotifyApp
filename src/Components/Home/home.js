import React, { useState, useContext } from "react";
import { auth, logout } from "../../firebase";
import { AuthContext } from "../../AuthProvider";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="NavigationBar">
      {currentUser && (
        <ul>
          <Link to="/webapp">
            <li>Open Web App</li>
          </Link>
          <li onClick={handleSignout}>Logout</li>
        </ul>
      )}

      {!currentUser && (
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
      )}
    </header>
  );
}

export default Home;
