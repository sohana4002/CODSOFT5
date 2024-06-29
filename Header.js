// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 75, width:150}} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexWrap: 'wrap', gap:1 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/jobs">
            Find Jobs
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'right', flexWrap: 'wrap', gap:1 }}>
          <Button color="success" variant="contained" component={Link} to="/login">
            Login
          </Button>
          <Button color="success" variant="contained" component={Link} to="/register">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
