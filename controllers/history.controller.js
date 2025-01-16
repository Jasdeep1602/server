const chat = require('../models/chat.model');

const historyCtrl = {
  history: async (req, res) => {
    try {
      const history = await chat.find().sort({ timestamp: -1 });
      res.json(history);
    } catch (error) {
      console.error('Error fetching chat history:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  },
};

module.exports = historyCtrl;
