import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { ContactSupport as ContactIcon } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ 
      background: 'rgba(255,255,255,0.95)', 
      backdropFilter: 'blur(10px)',
      p: 4, 
      borderRadius: 2, 
      mb: 4,
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ mb: 2, color: '#1F2937', fontWeight: 600, fontFamily: '"Nunito", sans-serif' }}>
            Need More?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontFamily: '"Nunito", sans-serif' }}>
            We provide custom 3D printing services for special projects, schools, and events. Let us know how we can help bring your child's imagination to life!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<ContactIcon />}
            sx={{ 
              background: '#6366F1', 
              borderRadius: 1, 
              px: 3, 
              py: 1,
              boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
              fontFamily: '"Nunito", sans-serif',
              '&:hover': {
                background: '#4F46E5',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(99,102,241,0.4)'
              }
            }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact; 