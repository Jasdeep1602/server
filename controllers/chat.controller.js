// Import required modules
const chat = require('../models/chat.model');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const chatCtrl = {
  chat: async (req, res) => {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    try {
      let botResponse;

      // Generate response using Google Generative AI
      try {
        const googleResponse = await model.generateContent(message);
        botResponse = googleResponse.response.text();
      } catch (googleError) {
        console.error('Google Generative AI Error:', googleError.message);
        return res.status(500).json({
          error: 'Failed to generate response using Google Generative AI.',
        });
      }

      // Save chat history to MongoDB
      const chats = new chat({ userMessage: message, botResponse });
      await chats.save();

      // Send response back to the user
      res.json({ userMessage: message, botResponse });
    } catch (error) {
      console.error('Error processing chat:', error);
      res.status(500).json({
        error: 'Something went wrong',
        details:
          process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  },
};

module.exports = chatCtrl;
