// src/pages/JobListings.js
import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button, TextField, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import mockJobs from '../data/mockJobs';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

  const filteredJobs = mockJobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === '' || job.location === locationFilter) &&
      (salaryFilter === '' || parseInt(job.salary) >= parseInt(salaryFilter))
    );
  });

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Job Listings
      </Typography>
      <TextField
        label="Search Jobs"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredJobs.length === 0 && (
        <Typography variant="h6" align="center" gutterBottom>
          No jobs found matching your search criteria.
        </Typography>
      )}
      <Grid container spacing={4}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.company}</Typography>
                <Typography>{job.location}</Typography>
                <Typography>Salary: ${job.salary}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="success" component={Link} to={`/jobs/${job.id}`}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobListings;
