import { useState, useRef } from 'react';

export const useImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
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

    try {
      // Simulate AI image generation and 3D printing process
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // For demo purposes, we'll use the uploaded image as the "generated" image
      // In a real implementation, this would be the AI-generated 3D model
      console.log('3D creature created successfully!');
    } catch (err) {
      setError('Failed to create your 3D creature. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setError('');
  };

  return {
    uploadedImage,
    isLoading,
    error,
    fileInputRef,
    handleImageUpload,
    handleGenerateImage,
    clearUpload
  };
}; 