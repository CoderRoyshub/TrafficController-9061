import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Delivery from './pages/Delivery';
import Transport from './pages/Transport';
import Emergency from './pages/Emergency';
import MapWrapper from './components/MapWrapper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MapWrapper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/emergency" element={<Emergency />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </MapWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App; // Ensure this is present
