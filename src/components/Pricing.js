import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Button
} from '@mui/material';

const pricingPlans = [
  {
    title: "Free Plan",
    subtitle: "Create your 3D creature digitally",
    price: "Free",
    features: [
      "✓ Create a 3D creature",
      "✓ Digital 3D model viewing",
      "✓ Perfect for testing ideas"
    ],
    buttonText: "Start Creating",
    buttonVariant: "outlined",
    featured: false
  },
  {
    title: "Single Creature",
    subtitle: "Get your creature printed",
    price: "$59.99",
    features: [
      "✓ 1 physical 3D printed creature",
      "✓ Paint supplies included",
      "✓ Shipping to your door"
    ],
    buttonText: "Order Now",
    buttonVariant: "contained",
    featured: true
  },
  {
    title: "Three Creatures",
    subtitle: "Perfect for families and siblings",
    price: "$129.99",
    features: [
      "✓ 3 physical 3D printed creatures",
      "✓ Paint supplies for all creatures",
      "✓ Bulk shipping discount",
      "✓ Family activity bundle"
    ],
    buttonText: "Order Now",
    buttonVariant: "contained",
    featured: false
  },
  {
    title: "School Plan",
    subtitle: "For classrooms and educational programs",
    price: "Contact Us",
    features: [
      "✓ Custom pricing for schools",
      "✓ Bulk creature printing"
    ],
    buttonText: "Contact Us",
    buttonVariant: "outlined",
    featured: false
  }
];

const Pricing = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, color: 'white', fontWeight: 600, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontFamily: '"Quicksand", sans-serif' }}>
        Choose Your Plan
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ 
              p: 3, 
              textAlign: 'center', 
              height: '100%', 
              borderRadius: 2,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              border: plan.featured ? '2px solid #6366F1' : '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}>
                            <Typography variant="h5" sx={{ mb: 2, color: '#1F2937', fontWeight: 600, fontFamily: '"Nunito", sans-serif' }}>
                {plan.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: '"Nunito", sans-serif' }}>
                {plan.subtitle}
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, color: '#6366F1', fontWeight: 'bold', fontFamily: '"Quicksand", sans-serif' }}>
                {plan.price}
              </Typography>
              <Box sx={{ mb: 3, flexGrow: 1 }}>
                {plan.features.map((feature, featureIndex) => (
                  <Typography 
                    key={featureIndex}
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 1, 
                      fontFamily: '"Nunito", sans-serif',
                      fontSize: '0.9rem'
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
              <Button 
                variant={plan.buttonVariant}
                fullWidth 
                sx={{ 
                  color: plan.buttonVariant === 'contained' ? 'white' : '#6366F1', 
                  borderColor: '#6366F1', 
                  background: plan.buttonVariant === 'contained' ? '#6366F1' : 'transparent',
                  borderRadius: 1, 
                  fontFamily: '"Nunito", sans-serif',
                  mt: 'auto'
                }}
              >
                {plan.buttonText}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing; 