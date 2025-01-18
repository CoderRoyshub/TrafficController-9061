import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Emergency() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom color="error">
        Emergency Services
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'error.light' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="white">
                Medical Emergency
              </Typography>
              <Typography variant="body2" color="white" sx={{ mb: 2 }}>
                Request immediate medical assistance
              </Typography>
              <Button variant="contained" color="error">
                Call Medical Help
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Vehicle Breakdown
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Request roadside assistance
              </Typography>
              <Button variant="contained">
                Request Mechanic
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Police Assistance
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Contact traffic police
              </Typography>
              <Button variant="contained">
                Contact Police
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Emergency Contacts
          </Typography>
          <Typography variant="body1">
            Police: 100
            <br />
            Ambulance: 102
            <br />
            Fire: 101
            <br />
            Traffic Control: 103
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Emergency;