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
import { Pets as PetsIcon } from '@mui/icons-material';

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
          <PetsIcon sx={{ color: '#6366F1', fontSize: 32, mr: 1 }} />
          <Typography variant="h6" sx={{ color: '#1F2937', fontWeight: 'bold', fontFamily: '"Quicksand", sans-serif' }}>
            DREAM TO PAINT
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography variant="body2" sx={{ color: '#1F2937', cursor: 'pointer' }}>
            Pricing
          </Typography>
          <Typography variant="body2" sx={{ color: '#1F2937', cursor: 'pointer' }}>
            Login
          </Typography>
          <Button variant="outlined" sx={{ color: '#6366F1', borderColor: '#6366F1' }}>
            Register
          </Button>
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <Select value="English" sx={{ color: '#1F2937' }}>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 