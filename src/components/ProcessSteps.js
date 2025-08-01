import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { PROCESS_STEPS } from '../constants/steps';

const ProcessSteps = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: 'white', fontWeight: 600, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontFamily: '"Quicksand", sans-serif' }}>
        How It Works
      </Typography>
      
      {/* First Row - Steps 1 & 2 */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        gap: 4,
        mb: 4,
        flexWrap: 'wrap'
      }}>
        {PROCESS_STEPS.slice(0, 2).map((step, index) => (
          <React.Fragment key={index}>
            <Card sx={{ 
              width: { xs: '100%', md: 400 },
              minHeight: { xs: 'auto', md: 420 },
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}>
              <Box sx={{ 
                background: step.color, 
                p: 2, 
                textAlign: 'center',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
              }}>
                <Box sx={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  mb: 1
                }}>
                  {step.icon}
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontFamily: '"Nunito", sans-serif', fontSize: '1.2rem' }}>
                  {step.title}
                </Typography>
              </Box>
              <CardContent sx={{ p: 2, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ 
                  width: '100%', 
                  height: { xs: 150, md: 200 }, 
                  background: '#f5f5f5',
                  borderRadius: 1,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={step.image}
                    alt={`Step ${index + 1} Image`}
                    sx={{ 
                      objectFit: 'contain',
                      minHeight: '100px'
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${step.image}`);
                      e.target.style.display = 'none';
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  lineHeight: 1.5, 
                  fontFamily: '"Nunito", sans-serif',
                  textAlign: 'center',
                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                  flexGrow: 1,
                  px: 1
                }}>
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
            
            {/* Arrow between steps */}
            {index === 0 && (
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                mx: 1
              }}>
                →
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>

      {/* Second Row - Steps 3 & 4 */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        gap: 4,
        flexWrap: 'wrap'
      }}>
        {PROCESS_STEPS.slice(2, 4).map((step, index) => (
          <React.Fragment key={index + 2}>
            <Card sx={{ 
              width: { xs: '100%', md: 400 },
              minHeight: { xs: 'auto', md: 420 },
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}>
              <Box sx={{ 
                background: step.color, 
                p: 2, 
                textAlign: 'center',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
              }}>
                <Box sx={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  mb: 1
                }}>
                  {step.icon}
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontFamily: '"Nunito", sans-serif', fontSize: '1.2rem' }}>
                  {step.title}
                </Typography>
              </Box>
              <CardContent sx={{ p: 2, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ 
                  width: '100%', 
                  height: { xs: 150, md: 200 }, 
                  background: '#f5f5f5',
                  borderRadius: 1,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={step.image}
                    alt={`Step ${index + 3} Image`}
                    sx={{ objectFit: 'contain' }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  lineHeight: 1.5, 
                  fontFamily: '"Nunito", sans-serif',
                  textAlign: 'center',
                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                  flexGrow: 1,
                  px: 1
                }}>
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
            
            {/* Arrow between steps */}
            {index === 0 && (
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                mx: 1
              }}>
                →
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ProcessSteps; 