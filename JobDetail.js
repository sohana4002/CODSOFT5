// src/pages/JobDetail.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import mockJobs from '../data/mockJobs';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const foundJob = mockJobs.find((job) => job.id === parseInt(id, 10));
    setJob(foundJob);
  }, [id]);

  if (!job) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" gutterBottom>{job.title}</Typography>
        <Typography variant="h6" gutterBottom>{job.company}</Typography>
        <Typography gutterBottom>{job.location}</Typography>
        <Typography gutterBottom>Salary: ${job.salary}</Typography>
        <Typography paragraph>{job.description}</Typography>
        <Button variant="contained" color="primary">Apply Now</Button>
      </Paper>
    </Container>
  );
};

export default JobDetail;
