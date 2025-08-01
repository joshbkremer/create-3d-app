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
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Dream to Paint Logo"
                sx={{
                  height: { xs: 20, sm: 24 },
                  width: 'auto',
                  mr: 1,
                  borderRadius: 1,
                  opacity: 0.7
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ 
                fontFamily: '"Nunito", sans-serif',
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}>
                Copyright © 2025 Dream to Paint Ltd.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 2, sm: 3 }, 
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' }
            }}>
              {footerLinks.map((link, index) => (
                <Typography 
                  key={index}
                  variant="body2" 
                  sx={{ 
                    color: '#1F2937', 
                    cursor: 'pointer', 
                    fontFamily: '"Nunito", sans-serif',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
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