import { useState, useRef } from 'react';
import { generateCreatureImage, generateMockCreatureImage } from '../services/geminiApi';
import { generate3DCreature, generateMock3DCreature } from '../services/meshyApi';

export const useImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [generated3DImage, setGenerated3DImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading3D, setIsLoading3D] = useState(false);
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
    setGenerated3DImage(null);

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

  const handleGenerate3DImage = async () => {
    if (!generatedImage) {
      setError('Please generate a 2D creature first.');
      return;
    }

    setIsLoading3D(true);
    setError('');
    setGenerated3DImage(null);

    try {
      let result;
      
      try {
        // Try to use real Meshy API
        console.log('Attempting to use real Meshy API');
        result = await generate3DCreature(generatedImage.imageUrl);
      } catch (apiError) {
        console.log('Meshy API call failed, using mock:', apiError.message);
        // Fallback to mock function
        result = await generateMock3DCreature(generatedImage.imageUrl);
      }

      if (result.success) {
        setGenerated3DImage({
          description: result.description,
          imageUrl: result.thumbnailUrl || generatedImage.imageUrl, // Fallback to 2D image
          modelUrl: result.modelUrl
        });
      } else {
        setError('Failed to generate 3D creature. Please try again.');
      }
    } catch (err) {
      console.error('3D Generation error:', err);
      setError(err.message || 'Failed to create your 3D creature. Please try again.');
    } finally {
      setIsLoading3D(false);
    }
  };

  const handleSendToPrinter = () => {
    // This would integrate with your printing service
    console.log('Sending creature to printer...');
    // Removed alert to keep the magical overlay experience uninterrupted
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setGeneratedImage(null);
    setGenerated3DImage(null);
    setError('');
  };

  return {
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
    handleSendToPrinter,
    clearUpload
  };
}; 