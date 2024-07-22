// src/Services.tsx
import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

// Define a functional component for each service container
const ServiceContainer: React.FC = () => {
  return (
    <Paper style={{ padding: 16, marginBottom: 16 }}>
      <Typography variant="h6" gutterBottom>
        Service Title
      </Typography>
      <TextField
        label="Service Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <TextField label="Price" variant="outlined" fullWidth margin="normal" />
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Paper>
  );
};

const Services: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Services Page
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceContainer />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceContainer />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
