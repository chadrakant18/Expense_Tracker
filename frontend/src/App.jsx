// // App.jsx

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/TempAuth";
// import Home from "./pages/Dashboard/Home";
// import Income from "./pages/Dashboard/Income";
// import Expense from "./pages/Dashboard/Expense";
// import UserProvider from "./context/AuthProvider";
// import {Toaster} from "react-hot-toast";

// const Root = () => {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return isAuthenticated ? (
//     <Navigate to="/dashboard" replace />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// const App = () => {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <UserProvider>
//       <div>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Root />} />

//         {/* Auth Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? (
//               <Home />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />

//         <Route
//           path="/income"
//           element={
//             isAuthenticated ? (
//               <Income />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />

//         <Route
//           path="/expense"
//           element={
//             isAuthenticated ? (
//               <Expense />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//     </div>
//     <Toaster
//     toastOptions={{
//       className:"",
//       style:{
//         fontSize:'13px'
//       },
//     }}
//     />
//     </UserProvider>
//   );
// };

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/TempAuth";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" replace />;
};

const Root = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/income"
            element={
              <PrivateRoute>
                <Income />
              </PrivateRoute>
            }
          />

          <Route
            path="/expense"
            element={
              <PrivateRoute>
                <Expense />
              </PrivateRoute>
            }
          />
        </Routes>

        <Toaster
          toastOptions={{
            style: {
              fontSize: "13px",
            },
          }}
        />
      </Router>
    </UserProvider>
  );
};

export default App;