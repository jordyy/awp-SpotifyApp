import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/ NavigationBar";
import Hero from "./Components/Hero";
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import PrivateRoute from "./Components/PrivateRoute";
import WebApp from "./webapp/WebApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}>
          <Route index element={<Hero />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="webapp" element={<AuthRoute />} />
        </Route>
      </Routes>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

function AuthRoute() {
  return (
    <div>
      <WebApp />
    </div>
  );
}

export default App;
