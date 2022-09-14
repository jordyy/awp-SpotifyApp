import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { useAuth } from "../../context/AuthContext";

const NavigationBar = () => {
  const auth = useAuth();

  return (
    <header className="NavigationBar">
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          {auth.user ? (
            <>
              <Link to="/webapp">
                <li>Open Web App</li>
              </Link>
              <li onClick={() => auth.signout()}>Sign Out</li>
            </>
          ) : (
            <>
              <Link to="/signup">
                <li>Sign Up</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
