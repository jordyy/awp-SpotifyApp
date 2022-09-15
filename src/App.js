import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Hero from "./Components/Hero";
import LoginForm from "./Components/LoginForm/LoginForm";
import WebApp from "./webapp/WebApp";
import Register from "./Components/SignUpForm/SignUpForm";
import Home from "./Components/Home/home";
import { AuthProvider } from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomeContent />}>
              <Route index element={<Hero />} />
              <Route path="signup" element={<Register />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="webapp" element={<AuthRoute />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

function HomeContent() {
  return (
    <div>
      <Home />
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
