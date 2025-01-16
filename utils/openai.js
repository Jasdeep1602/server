// const { Configuration, OpenAIApi } = require('openai');
// require('dotenv').config();

// const openai = new OpenAIApi(
//   new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   })
// );

// module.exports = openai;

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure this key exists in your .env file
});

module.exports = openai;
