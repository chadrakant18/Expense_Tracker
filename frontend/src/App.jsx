// App.jsx

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />

        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            localStorage.getItem("token") ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/income"
          element={
            localStorage.getItem("token") ? (
              <Income />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/expense"
          element={
            localStorage.getItem("token") ? (
              <Expense />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
