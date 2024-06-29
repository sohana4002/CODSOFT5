// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import mockJobs from '../data/mockJobs';

const Home = () => {
  return (
    <Container>
      <Paper elevation={1} sx={{ p: 15, textAlign: 'center', mt: 10, mb: 10, backgroundImage: 'url(https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/business-background-15.png)', backgroundSize: 'cover' }}>
      <Typography variant="h2" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>Welcome to the Job Finder</Typography>
      <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>Find your dream job or the perfect candidate here.</Typography>
        <Button variant="contained" color="primary" component={Link} to="/jobs" sx={{ mt: 2 }}>
          View Job Listings
        </Button>
      </Paper>
      <Typography variant="h4" gutterBottom>Featured Job Listings</Typography>
      <Grid container spacing={4}>
        {mockJobs.slice(0, 4).map((job) => (
          <Grid item xs={12} sm={6} md={3} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.company}</Typography>
                <Typography>{job.location}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary" component={Link} to={`/jobs/${job.id}`}>View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
