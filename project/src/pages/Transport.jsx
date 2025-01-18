import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, Box } from '@mui/material';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 20.5937,  // Default to center of India
  lng: 78.9629
};

function Transport() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [directions, setDirections] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const directionsCallback = useCallback((response, status) => {
    setIsLoading(false);
    if (status === 'OK') {
      setDirections(response);
      setError(null);
    } else {
      setDirections(null);
      setError('Could not find directions for the specified locations. Please try different locations.');
    }
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          // Convert coordinates to address using Geocoding service
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location }, (results, status) => {
            if (status === 'OK' && results[0]) {
              setPickup(results[0].formatted_address);
            }
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Could not get your current location. Please enter it manually.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  };

  const findTransport = () => {
    if (!pickup || !dropoff) {
      setError('Please enter both pickup and drop-off locations');
      return;
    }
    setIsLoading(true);
    setError(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Transport Solutions
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Book Transport
              </Typography>
              <TextField
                fullWidth
                label="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                sx={{ mb: 2 }}
                error={Boolean(error && !pickup)}
                helperText={error && !pickup ? 'Pickup location is required' : ''}
              />
              <TextField
                fullWidth
                label="Drop-off Location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                sx={{ mb: 2 }}
                error={Boolean(error && !dropoff)}
                helperText={error && !dropoff ? 'Drop-off location is required' : ''}
              />
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                onClick={findTransport}
                sx={{ mb: 2 }}
                disabled={isLoading}
              >
                {isLoading ? 'Finding Transport...' : 'Find Transport'}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={getCurrentLocation}
                disabled={isLoading}
              >
                Use Current Location
              </Button>
              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ height: '400px' }}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={userLocation || defaultCenter}
              zoom={12}
            >
              {pickup && dropoff && !error && (
                <DirectionsService
                  options={{
                    destination: dropoff,
                    origin: pickup,
                    travelMode: 'DRIVING'
                  }}
                  callback={directionsCallback}
                />
              )}
              {directions && (
                <DirectionsRenderer
                  options={{
                    directions: directions
                  }}
                />
              )}
            </GoogleMap>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Transport;