import React from 'react';
import {
  Box,
  Grid,
  Card,
  Typography
} from '@mui/material';
import {
  Favorite as HeartIcon,
  Star as StarIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';

const features = [
  {
    icon: <HeartIcon sx={{ fontSize: 50, color: '#10B981', mb: 2 }} />,
    title: "Safe & Secure",
    description: "Your child's drawings are handled with care. We use secure, child-friendly processes to create their 3D creatures."
  },
  {
    icon: <StarIcon sx={{ fontSize: 50, color: '#F59E0B', mb: 2 }} />,
    title: "Educational",
    description: "We've helped thousands of families bring their children's imaginations to life through creative 3D printing."
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 50, color: '#6366F1', mb: 2 }} />,
    title: "Accurate",
    description: "Our AI continuously improves to capture every detail of your child's drawing. If it's not perfect, we'll fix it!"
  }
];

const Features = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              textAlign: 'center', 
              p: 3, 
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}>
              {feature.icon}
              <Typography variant="h5" sx={{ mb: 2, color: '#1F2937', fontWeight: 600, fontFamily: '"Nunito", sans-serif' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontFamily: '"Nunito", sans-serif' }}>
                {feature.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features; 