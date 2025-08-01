import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ 
      background: 'rgba(255,255,255,0.95)', 
      backdropFilter: 'blur(10px)',
      boxShadow: 'none', 
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      position: 'relative',
      zIndex: 1
    }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Dream to Paint Logo"
            sx={{
              height: { xs: 32, md: 40 },
              width: 'auto',
              mr: 2,
              borderRadius: 2,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
            onError={(e) => {
              // Fallback to text if image fails to load
              e.target.style.display = 'none';
            }}
          />
          <Typography variant="h6" sx={{ 
            color: '#1F2937', 
            fontWeight: 'bold', 
            fontFamily: '"Quicksand", sans-serif',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            DREAM TO PAINT
          </Typography>
        </Box>
        <Box sx={{ 
          display: { xs: 'none', sm: 'flex' }, 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2, md: 3 } 
        }}>
          <Typography variant="body2" sx={{ 
            color: '#1F2937', 
            cursor: 'pointer',
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}>
            Pricing
          </Typography>
          <Typography variant="body2" sx={{ 
            color: '#1F2937', 
            cursor: 'pointer',
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}>
            Login
          </Typography>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ 
              color: '#6366F1', 
              borderColor: '#6366F1',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              px: { xs: 1, sm: 2 }
            }}
          >
            Register
          </Button>
          <FormControl size="small" sx={{ minWidth: { xs: 80, sm: 100 } }}>
            <Select value="English" sx={{ 
              color: '#1F2937',
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 