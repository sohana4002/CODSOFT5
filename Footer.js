// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 5, textAlign: 'center' }}>
      <Typography variant="body1">&copy; 2024 Job Board. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
