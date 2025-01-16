const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express app and middlewares
const app = express();
app.use(bodyParser.json());

//mongodb setup

const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server is running');
});

// Routes
// Test route
app.get('/', (req, res) => {
  res.send('Chatbot Backend is running!');
});

//chat and history routes
app.use('/api', require('./routes/chat.route'));
app.use('/api', require('./routes/history.route'));
