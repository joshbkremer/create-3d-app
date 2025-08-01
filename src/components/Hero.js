import React, { useState } from 'react';
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
    generatedImage,
    generated3DImage,
    isLoading,
    isLoading3D,
    error,
    fileInputRef,
    handleImageUpload,
    handleGenerateImage,
    handleGenerate3DImage,
    handleSendToPrinter
  } = useImageUpload();

  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrintClick = () => {
    setIsPrinting(true);
    // Simulate printing process - show overlay for 5 seconds, then fade out over 3 seconds
    setTimeout(() => {
      setIsPrinting(false);
      handleSendToPrinter();
    }, 8000); // 5 seconds display + 3 seconds fade out = 8 seconds total
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      {/* Logo Display */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src="/logo.png"
          alt="Dream to Paint Logo"
          sx={{
            height: { xs: 120, sm: 160, md: 200 },
            width: 'auto',
            borderRadius: 3,
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': {
                transform: 'translateY(0px)',
              },
              '50%': {
                transform: 'translateY(-10px)',
              },
            },
          }}
          onError={(e) => {
            // Fallback to text if image fails to load
            e.target.style.display = 'none';
          }}
        />
      </Box>
      
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
            <Typography variant="h6" sx={{ mb: 2, color: '#1F2937', fontWeight: 600, fontFamily: '"Nunito", sans-serif' }}>
              Your Original Drawing
            </Typography>
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

        {generatedImage && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              color: '#1F2937', 
              fontWeight: 600, 
              fontFamily: '"Nunito", sans-serif',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              ✨ Your Generated 2D Creature ✨
            </Typography>
            
            {/* Exciting container with flare effects */}
            <Box sx={{ 
              position: 'relative',
              maxWidth: 500,
              mx: 'auto',
              mb: 3,
              p: 3,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              borderRadius: 4,
              border: '2px solid rgba(99,102,241,0.3)',
              boxShadow: '0 8px 32px rgba(99,102,241,0.2), 0 0 20px rgba(139,92,246,0.1)',
              backdropFilter: 'blur(10px)',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': {
                  boxShadow: '0 8px 32px rgba(99,102,241,0.2), 0 0 20px rgba(139,92,246,0.1)',
                },
                '50%': {
                  boxShadow: '0 8px 32px rgba(99,102,241,0.4), 0 0 30px rgba(139,92,246,0.3)',
                },
              },
            }}>
              {/* Sparkle effects */}
              <Box sx={{
                position: 'absolute',
                top: -10,
                left: -10,
                width: 20,
                height: 20,
                background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'sparkle 3s ease-in-out infinite',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                },
              }} />
              <Box sx={{
                position: 'absolute',
                top: 20,
                right: -15,
                width: 15,
                height: 15,
                background: 'radial-gradient(circle, #FF69B4 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'sparkle 2.5s ease-in-out infinite 0.5s',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                },
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: 10,
                left: '50%',
                width: 12,
                height: 12,
                background: 'radial-gradient(circle, #00CED1 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'sparkle 3.5s ease-in-out infinite 1s',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                },
              }} />
              
              {/* The generated image */}
              <Box
                component="img"
                src={generatedImage.imageUrl}
                alt="Generated 2D creature"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Box>
            

          </Box>
        )}

        {generated3DImage && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              color: '#1F2937', 
              fontWeight: 600, 
              fontFamily: '"Nunito", sans-serif',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              🎯 Your 3D Creature Ready for Printing! 🎯
            </Typography>
            
            {/* 3D container with special effects */}
            <Box sx={{ 
              position: 'relative',
              maxWidth: 500,
              mx: 'auto',
              mb: 3,
              p: 3,
              background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(5,150,105,0.1) 100%)',
              borderRadius: 4,
              border: '2px solid rgba(16,185,129,0.3)',
              boxShadow: '0 8px 32px rgba(16,185,129,0.2), 0 0 20px rgba(5,150,105,0.1)',
              backdropFilter: 'blur(10px)',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': {
                  boxShadow: '0 8px 32px rgba(16,185,129,0.2), 0 0 20px rgba(5,150,105,0.1)',
                },
                '50%': {
                  boxShadow: '0 8px 32px rgba(16,185,129,0.4), 0 0 30px rgba(5,150,105,0.3)',
                },
              },
            }}>
              {/* 3D sparkle effects */}
              <Box sx={{
                position: 'absolute',
                top: -10,
                left: -10,
                width: 20,
                height: 20,
                background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'sparkle 3s ease-in-out infinite',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                },
              }} />
              <Box sx={{
                position: 'absolute',
                top: 20,
                right: -15,
                width: 15,
                height: 15,
                background: 'radial-gradient(circle, #059669 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'sparkle 2.5s ease-in-out infinite 0.5s',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                },
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: 10,
                left: '50%',
                width: 12,
                height: 12,
                background: 'radial-gradient(circle, #047857 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'sparkle 3.5s ease-in-out infinite 1s',
                '@keyframes sparkle': {
                  '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                },
              }} />
              
              {/* The 3D image */}
              <Box
                component="img"
                src={generated3DImage.imageUrl}
                alt="Generated 3D creature"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Box>
            
            {/* Print button */}
            <Button
              variant="contained"
              size="large"
              onClick={handlePrintClick}
              disabled={isPrinting}
              sx={{
                background: 'linear-gradient(45deg, #8B5CF6 30%, #7C3AED 90%)',
                color: 'white',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(139,92,246,0.3)',
                fontFamily: '"Nunito", sans-serif',
                '&:hover': {
                  background: 'linear-gradient(45deg, #7C3AED 30%, #6D28D9 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(139,92,246,0.4)'
                }
              }}
            >
              {isPrinting ? (
                <>
                  <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                  Making Magic Happen...
                </>
              ) : (
                'SEND CREATURE TO PRINTER'
              )}
            </Button>
          </Box>
        )}

        {/* Whimsical Printing Overlay */}
        {isPrinting && (
          <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(139,92,246,0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeInOut 8s ease-in-out',
            '@keyframes fadeInOut': {
              '0%': { opacity: 0 },
              '6.25%': { opacity: 1 }, // Fade in over first 0.5s (6.25% of 8s)
              '62.5%': { opacity: 1 }, // Stay visible for 5s (62.5% of 8s)
              '100%': { opacity: 0 } // Fade out over last 3s (37.5% of 8s)
            }
          }}>
            {/* Floating sparkles */}
            <Box sx={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 20,
              height: 20,
              background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'sparkle 2s ease-in-out infinite',
              '@keyframes sparkle': {
                '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
                '50%': { opacity: 1, transform: 'scale(1.2)' }
              }
            }} />
            <Box sx={{
              position: 'absolute',
              top: '30%',
              right: '15%',
              width: 15,
              height: 15,
              background: 'radial-gradient(circle, #FF69B4 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'sparkle 2.5s ease-in-out infinite 0.5s'
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: '25%',
              left: '20%',
              width: 18,
              height: 18,
              background: 'radial-gradient(circle, #00CED1 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'sparkle 3s ease-in-out infinite 1s'
            }} />

            {/* Main content */}
            <Box sx={{
              textAlign: 'center',
              color: 'white',
              maxWidth: 600,
              px: 4
            }}>
              <Typography variant="h3" sx={{
                fontWeight: 'bold',
                mb: 3,
                fontFamily: '"Quicksand", sans-serif',
                animation: 'bounce 2s ease-in-out infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-10px)' },
                  '60%': { transform: 'translateY(-5px)' }
                }
              }}>
                ✨ Making Your Dreams Come True! ✨
              </Typography>
              
              <Typography variant="h5" sx={{
                mb: 4,
                fontFamily: '"Nunito", sans-serif',
                opacity: 0.9
              }}>
                🎨 Our magical printers are crafting your creature with love and care...
              </Typography>

              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mb: 4
              }}>
                <CircularProgress 
                  size={60} 
                  thickness={4}
                  sx={{ 
                    color: 'white',
                    animation: 'pulse 2s ease-in-out infinite'
                  }} 
                />
              </Box>

              <Typography variant="body1" sx={{
                fontFamily: '"Nunito", sans-serif',
                opacity: 0.8,
                animation: 'fadeInOut 3s ease-in-out infinite',
                '@keyframes fadeInOut': {
                  '0%, 100%': { opacity: 0.8 },
                  '50%': { opacity: 1 }
                }
              }}>
                🌟 Your creature will arrive soon, ready to be painted and loved! 🌟
              </Typography>
            </Box>
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}>
            {error}
          </Alert>
        )}

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          {!generated3DImage && uploadedImage && (
            <Button
              variant="contained"
              size="large"
              startIcon={<MagicIcon />}
              onClick={generatedImage ? handleGenerate3DImage : handleGenerateImage}
              disabled={isLoading || isLoading3D}
              sx={{
                background: generatedImage 
                  ? 'linear-gradient(45deg, #6366F1 30%, #4F46E5 90%)' 
                  : 'linear-gradient(45deg, #F59E0B 30%, #D97706 90%)',
                color: 'white',
                borderRadius: 2,
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: generatedImage 
                  ? '0 4px 15px rgba(99,102,241,0.3)' 
                  : '0 4px 15px rgba(245,158,11,0.3)',
                fontFamily: '"Nunito", sans-serif',
                '&:hover': {
                  background: generatedImage 
                    ? 'linear-gradient(45deg, #4F46E5 30%, #3730A3 90%)' 
                    : 'linear-gradient(45deg, #D97706 30%, #B45309 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: generatedImage 
                    ? '0 6px 20px rgba(99,102,241,0.4)' 
                    : '0 6px 20px rgba(245,158,11,0.4)'
                }
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : isLoading3D ? (
                <CircularProgress size={24} color="inherit" />
              ) : generatedImage ? (
                'CREATE MY 3D CREATURE!'
              ) : (
                'Create My 2D Creature!'
              )}
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Hero; 