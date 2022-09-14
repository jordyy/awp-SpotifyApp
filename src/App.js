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
import LoginForm from "./Components/LoginForm/LoginForm";
import WebApp from "./webapp/WebApp";
// import Reset from "./Components/Reset";
import Register from "./Components/SignUpForm/SignUpForm";
import Dashboard from "./Components/Dashboard/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}>
          <Route index element={<Hero />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<LoginForm />} />
          {/* <Route path="reset" element={<Reset />} /> */}
          <Route path="webapp" element={<AuthRoute />} />
          <Route path="dashboard" element={<Dashboard />} />
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
