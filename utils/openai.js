// const axios = require('axios');
// require('dotenv').config();

// // Create a pre-configured axios instance
// const huggingFaceClient = axios.create({
//   baseURL: 'https://api-inference.huggingface.co/models',
//   headers: {
//     Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//     'Content-Type': 'application/json',
//   },
// });

// module.exports = huggingFaceClient;

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());
