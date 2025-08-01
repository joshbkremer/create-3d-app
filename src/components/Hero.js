import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  Brush as BrushIcon,
  EmojiEmotions as MagicIcon
} from '@mui/icons-material';
import { useImageUpload } from '../hooks/useImageUpload';

const Hero = () => {
  const {
    uploadedImage,
    isLoading,
    error,
    fileInputRef,
    handleImageUpload,
    handleGenerateImage
  } = useImageUpload();

  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          fontWeight: 'bold',
          color: 'white',
          mb: 2,
          fontSize: { xs: '2rem', md: '3rem' },
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          fontFamily: '"Quicksand", sans-serif'
        }}
      >
        The world's most magical 3D creature creator
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          color: 'rgba(255,255,255,0.9)',
          fontWeight: 300,
          mb: 4,
          maxWidth: 700,
          mx: 'auto',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          fontFamily: '"Nunito", sans-serif'
        }}
      >
        Transform your dreams into beautiful 3D printed creatures!
      </Typography>
      
      {/* Upload Area */}
      <Paper 
        sx={{ 
          p: 4, 
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          maxWidth: 600,
          mx: 'auto',
          mb: 4,
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}
      >
        <Box
          sx={{
            border: '3px dashed #6366F1',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'rgba(255,255,255,0.8)',
            '&:hover': {
              borderColor: '#4F46E5',
              backgroundColor: 'rgba(99,102,241,0.05)',
              transform: 'scale(1.02)'
            }
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <BrushIcon sx={{ fontSize: 60, color: '#6366F1', mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 2, color: '#1F2937', fontWeight: 600, fontFamily: '"Nunito", sans-serif' }}>
            Click here to upload your drawing!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontFamily: '"Nunito", sans-serif' }}>
            Take a photo of your whimsical creature drawing
          </Typography>
        </Box>

        {uploadedImage && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Card sx={{ borderRadius: 2, overflow: 'hidden', maxWidth: 350, mx: 'auto' }}>
              <CardMedia
                component="img"
                height="200"
                image={uploadedImage.preview}
                alt="Child's drawing"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {uploadedImage.file.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}>
            {error}
          </Alert>
        )}

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<MagicIcon />}
            onClick={handleGenerateImage}
            disabled={!uploadedImage || isLoading}
            sx={{
              background: 'linear-gradient(45deg, #6366F1 30%, #8B5CF6 90%)',
              color: 'white',
              borderRadius: 2,
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
              fontFamily: '"Nunito", sans-serif',
              '&:hover': {
                background: 'linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(99,102,241,0.4)'
              }
            }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Create My 3D Creature!'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Hero; 