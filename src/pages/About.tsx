// src/About.tsx
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

// Define styled components
const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const About: React.FC = () => {
  return (
    <Container>
      <Header variant="h4">About Us</Header>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <CustomAvatar
            alt="Company Logo"
            src="/path/to/your/logo.png" // Replace with your image path
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Section>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to deliver high-quality products and services that
              exceed customer expectations. We believe in innovation, integrity,
              and excellence in all that we do. Our team is dedicated to
              providing exceptional solutions and building long-lasting
              relationships with our clients.
            </Typography>
            <DividerStyled />
            <Typography variant="h5" gutterBottom>
              Our History
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2000, our company has grown from a small startup to a
              leading player in our industry. Over the years, we have expanded
              our services, improved our processes, and embraced new
              technologies to better serve our customers. Our commitment to
              continuous improvement and customer satisfaction remains at the
              core of our business.
            </Typography>
            <DividerStyled />
            <Typography variant="h5" gutterBottom>
              Meet the Team
            </Typography>
            <Typography variant="body1" paragraph>
              Our team consists of experienced professionals who are passionate
              about what they do. Each member brings unique skills and
              expertise, contributing to our overall success. We work
              collaboratively to achieve our goals and deliver outstanding
              results for our clients.
            </Typography>
          </Section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
