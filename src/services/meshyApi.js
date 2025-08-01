// Meshy.ai API Service for 3D Generation
// Note: You'll need to add your Meshy API key to .env.local file
// REACT_APP_MESHY_API_KEY=your_meshy_api_key_here

const MESHY_API_URL = 'https://api.meshy.ai/v1/text-to-3d';

export const generate3DCreature = async (imageData) => {
  try {
    console.log('Making Meshy API call for 3D generation...');
    
    // Get API key from environment
    const apiKey = process.env.REACT_APP_MESHY_API_KEY;
    
    if (!apiKey) {
      throw new Error('Meshy API key not configured');
    }

    // Convert base64 image to blob for upload
    const base64Response = await fetch(imageData);
    const blob = await base64Response.blob();

    // Create form data for the API call
    const formData = new FormData();
    formData.append('image', blob, 'creature.png');
    formData.append('prompt', 'Create a 3D model of this creature suitable for 3D printing. Make it detailed, colorful, and child-friendly.');

    console.log('Sending request to Meshy API...');
    
    const response = await fetch(MESHY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      body: formData
    });

    console.log('Meshy API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Meshy API Error Response:', errorText);
      throw new Error(`Meshy API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Meshy API response received');

    return {
      success: true,
      modelUrl: data.model_url || null,
      thumbnailUrl: data.thumbnail_url || null,
      description: 'Your 3D creature has been generated! It\'s ready for 3D printing.'
    };

  } catch (error) {
    console.error('Meshy API Error:', error);
    throw new Error('Failed to generate 3D creature. Please try again.');
  }
};

// Mock function for demonstration
export const generateMock3DCreature = async (imageData) => {
  // Simulate API call delay
  console.log('Making a fake Meshy API call for 3D generation...');

  await new Promise(resolve => setTimeout(resolve, 5000));
  
  return {
    success: true,
    modelUrl: null, // In a real implementation, this would be the 3D model URL
    thumbnailUrl: '/step3.png', // Use the step3.png file as placeholder
    description: 'Your 3D creature has been generated! It\'s ready for 3D printing.'
  };
}; 