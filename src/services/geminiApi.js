// Google Gemini Flash API Service with Image Generation
// Note: You'll need to add your API key to .env.local file
// REACT_APP_GEMINI_API_KEY=your_api_key_here

import { GoogleGenAI, Modality } from "@google/genai";
import { CREATURE_GENERATION_PROMPT } from '../constants/prompts';

export const generateCreatureImage = async (imageData) => {
  try {
    console.log('Making Gemini API call with image generation...');
    
    // Get API key from environment (only available in production build)
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error('API key not configured');
    }
    
    // Initialize the Google GenAI client
    const ai = new GoogleGenAI({ apiKey });
    
    // Convert base64 image data
    const imageDataUrl = imageData;
    const base64Image = imageDataUrl.split(',')[1]; // Remove data:image/...;base64, prefix

    // Prepare the content parts
    const contents = [
      { 
        text: CREATURE_GENERATION_PROMPT
      },
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Image,
        },
      },
    ];

    console.log('Sending request to Gemini API with image generation...');
    
    // Set responseModalities to include "Image" so the model can generate an image
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    console.log('Gemini API response received');
    
    let generatedText = '';
    let generatedImageData = null;

    // Process the response parts
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        generatedText = part.text;
        console.log('Generated text:', generatedText);
      } else if (part.inlineData) {
        generatedImageData = part.inlineData.data;
        console.log('Generated image data received');
      }
    }

    return {
      success: true,
      description: generatedText || 'Creature generated successfully!',
      imageUrl: generatedImageData ? `data:image/png;base64,${generatedImageData}` : null
    };

  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to generate creature. Please try again.');
  }
};

// Mock function for demonstration
export const generateMockCreatureImage = async (imageData) => {
  // Simulate API call delay
  console.log('Making a fake Gemini API call with image generation...');

  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return {
    success: true,
    description: "A whimsical 2D creature has been generated from your drawing! The AI has created a clean, colorful illustration that captures the essence of your original creature while making it perfect for 3D printing. The generated image shows a vibrant, child-friendly 2D creature ready for 3D printing.",
    imageUrl: imageData // For demo, we'll use the original image as a placeholder
  };
}; 