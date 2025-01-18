import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { getWeather } from '../services/weatherService';

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const weatherData = await getWeather(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeather(weatherData);
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      });
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to Traffic Relief
      </Typography>

      {weather && (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Current Weather
            </Typography>
            <Typography variant="body1">
              Temperature: {weather.main.temp}°C
              <br />
              Conditions: {weather.weather[0].description}
              <br />
              Humidity: {weather.main.humidity}%
            </Typography>
          </CardContent>
        </Card>
      )}
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800"
              alt="Delivery Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Delivery Services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Order food, essentials, and beverages while stuck in traffic. Choose from a wide selection of restaurants and stores.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800"
              alt="Transport Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Transport Solutions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quick transport booking to help you escape traffic. Professional drivers and comfortable vehicles at your service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800"
              alt="Emergency Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Emergency Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quick access to emergency and breakdown services. 24/7 support for your safety and peace of mind.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;