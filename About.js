// src/pages/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>About Us</Typography>
      <Typography align="center">
        We are a team passionate about connecting job seekers with employers and helping them find their dream jobs
        or perfect candidates.
      </Typography>
    </Container>
  );
};

export default About;
