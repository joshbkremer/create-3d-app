import { useState, useRef } from 'react';
import { generateCreatureImage, generateMockCreatureImage } from '../services/geminiApi';

export const useImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage({
            file: file,
            preview: e.target.result
          });
          setError('');
        };
        reader.readAsDataURL(file);
      } else {
        setError('Please upload a valid image file.');
      }
    }
  };

  const handleGenerateImage = async () => {
    if (!uploadedImage) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedImage(null);

    try {
      let result;
      
      try {
        // Try to use real Gemini API
        console.log('Attempting to use real Gemini API');
        result = await generateCreatureImage(uploadedImage.preview);
      } catch (apiError) {
        console.log('API call failed, using mock:', apiError.message);
        // Fallback to mock function
        result = await generateMockCreatureImage(uploadedImage.preview);
      }

      if (result.success) {
        setGeneratedImage({
          description: result.description,
          imageUrl: result.imageUrl || uploadedImage.preview // Fallback to original image
        });
      } else {
        setError('Failed to generate creature. Please try again.');
      }
    } catch (err) {
      console.error('Generation error:', err);
      setError(err.message || 'Failed to create your 2D creature. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setGeneratedImage(null);
    setError('');
  };

  return {
    uploadedImage,
    generatedImage,
    isLoading,
    error,
    fileInputRef,
    handleImageUpload,
    handleGenerateImage,
    clearUpload
  };
}; 