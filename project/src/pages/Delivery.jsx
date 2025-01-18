import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, CardMedia } from '@mui/material';

function Delivery() {
  const [location, setLocation] = useState('');

  const restaurants = [
    {
      name: "Gourmet Express",
      type: "Fine Dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800",
      description: "Luxury dining experience delivered to you"
    },
    {
      name: "Fresh Market",
      type: "Groceries",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800",
      description: "Fresh produce and essential items"
    },
    {
      name: "Quick Pharmacy",
      type: "Medicines",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800",
      description: "Emergency medicines and first-aid supplies"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Delivery Services
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <TextField
            fullWidth
            label="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary">
            Find Nearby Services
          </Button>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={restaurant.image}
                alt={restaurant.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {restaurant.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {restaurant.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  View Menu
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Delivery;