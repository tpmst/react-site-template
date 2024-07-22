import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./logic/AuthContext"; // Make sure the path is correct

// Import pages and components
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DrawerMenu from "./components/DrawerMenu"; // Updated from MenuBar to DrawerMenu

// Import PrivateRoute component
import PrivateRoute from "./logic/PrivateRoute";

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  Box,
} from "@mui/material";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <DrawerMenu />
            <Box flexGrow={1} display="flex" justifyContent="center">
              <Typography variant="h6">My Website</Typography>
            </Box>
            <AuthButton />
          </Toolbar>
        </AppBar>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<LandingPage />} />

            {/* Protected Routes */}
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/about"
              element={<PrivateRoute element={<About />} />}
            />
            <Route
              path="/services"
              element={<PrivateRoute element={<Services />} />}
            />
            <Route
              path="/contact"
              element={<PrivateRoute element={<Contact />} />}
            />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/landing" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

const AuthButton: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return isAuthenticated ? (
    <Button
      color="inherit"
      onClick={() => {
        logout();
        navigate("/landing");
      }}
    >
      Logout
    </Button>
  ) : (
    <Button color="inherit" onClick={() => navigate("/login")}>
      Login
    </Button>
  );
};

export default App;
