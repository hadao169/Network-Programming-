const axios = require("axios");

// The URL of the server's /add endpoint
const url = "http://localhost:4000/add";

// List of 3 quotes to send
const quotes = [
  {
    id: 20,
    quote: "The best way to predict the future is to create it.",
    source: "Peter Drucker",
  },
  {
    id: 21,
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    source: "Zig Ziglar",
  },
  {
    id: 22,
    quote: "You miss 100% of the shots you don’t take.",
    source: "Wayne Gretzky",
  },
];

// Sending quotes to the server one by one
async function sendQuotes() {
  for (const quote of quotes) {
    try {
      const response = await axios.post(url, quote);
      console.log(`Successfully added quotes`);
    } catch (error) {
      console.log(`Failed to add quote: ${error.message}`);
    }
  }
}

sendQuotes();
