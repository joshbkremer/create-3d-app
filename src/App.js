import React from 'react';
import { Box, Container } from '@mui/material';
import {
  Header,
  Hero,
  ProcessSteps,
  Pricing,
  Contact,
  Footer,
  Background
} from './components';
import './App.css';

function App() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Background />
      
      <Header />

      <Container maxWidth="lg" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
        <Hero />
        <ProcessSteps />
        <Pricing />
        <Contact />
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
