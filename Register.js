// src/pages/Register.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('candidate');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(name, email, password, role);
      navigate('/login');
    } catch (err) {
      setError('Failed to register');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>Register</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            fullWidth
            select
            label="Role"
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <MenuItem value="candidate">Candidate</MenuItem>
            <MenuItem value="employer">Employer</MenuItem>
          </TextField>
          <Box my={2}>
            <Button type="submit" fullWidth variant="contained" color="primary">Register</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
