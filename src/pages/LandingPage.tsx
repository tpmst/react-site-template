import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="body1">
          This is a landing page visible to users who are not logged in. Please
          log in to access more features.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
