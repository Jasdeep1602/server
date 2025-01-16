const chat = require('../models/chat.model');
const openai = require('../utils/openai');
require('dotenv').config();

const chatCtrl = {
  chat: async (req, res) => {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    try {
      // Get response from OpenAI
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Make sure to use a valid model name
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
        max_tokens: 150,
      });

      const botResponse = completion.choices[0].message.content.trim();

      // Save chat history to MongoDB
      const chats = new chat({ userMessage: message, botResponse });
      await chats.save();

      // Send response back to the user
      res.json({ userMessage: message, botResponse });
    } catch (error) {
      console.error('Error processing chat:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  },
};

module.exports = chatCtrl;
