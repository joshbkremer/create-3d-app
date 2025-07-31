import React from 'react';
import { Box } from '@mui/material';

const Background = () => {
  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {/* Floating paint splashes */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: 60,
        height: 60,
        background: 'radial-gradient(circle, rgba(255,107,157,0.3) 0%, rgba(255,107,157,0.1) 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: 80,
        height: 80,
        background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0.1) 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '30%',
        left: '15%',
        width: 50,
        height: 50,
        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.1) 70%)',
        borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite'
      }} />
      
      {/* Floating shapes representing drawings */}
      <Box sx={{
        position: 'absolute',
        top: '40%',
        right: '20%',
        width: 40,
        height: 40,
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '20%',
        transform: 'rotate(45deg)',
        animation: 'float 9s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        width: 30,
        height: 30,
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        animation: 'float 5s ease-in-out infinite reverse'
      }} />
      
      {/* Magic sparkles */}
      <Box sx={{
        position: 'absolute',
        top: '60%',
        left: '25%',
        width: 20,
        height: 20,
        background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0.1) 70%)',
        borderRadius: '50%',
        animation: 'sparkle 3s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        top: '15%',
        left: '40%',
        width: 15,
        height: 15,
        background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0.1) 70%)',
        borderRadius: '50%',
        animation: 'sparkle 4s ease-in-out infinite 1s'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '40%',
        right: '30%',
        width: 25,
        height: 25,
        background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0.1) 70%)',
        borderRadius: '50%',
        animation: 'sparkle 3.5s ease-in-out infinite 0.5s'
      }} />
    </Box>
  );
};

export default Background; 