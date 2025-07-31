import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Footer = () => {
  const footerLinks = [
    'Earn Credits',
    'API Docs',
    'About',
    'Terms',
    'Privacy',
    'Blog'
  ];

  return (
    <Box sx={{ 
      background: 'rgba(255,255,255,0.95)', 
      backdropFilter: 'blur(10px)',
      py: 3, 
      mt: 6,
      borderTop: '1px solid rgba(255,255,255,0.2)'
    }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Nunito", sans-serif' }}>
              Copyright © 2025 Dream to Paint Ltd.
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              {footerLinks.map((link, index) => (
                <Typography 
                  key={index}
                  variant="body2" 
                  sx={{ 
                    color: '#1F2937', 
                    cursor: 'pointer', 
                    fontFamily: '"Nunito", sans-serif',
                    '&:hover': {
                      color: '#6366F1'
                    }
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 