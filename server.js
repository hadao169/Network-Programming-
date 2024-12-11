const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

let quotes = [
  {
    id: 1,
    quote: "The only way to do great work is to love what you do.",
    source: "Steve Jobs",
  },
  {
    id: 2,
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
  {
    id: 3,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
  },
  {
    id: 4,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
  },
  {
    id: 5,
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
  },
  {
    id: 6,
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    source: "Dalai Lama",
  },
  {
    id: 7,
    quote: "The purpose of our lives is to be happy.",
    source: "Dalai Lama",
  },
  {
    id: 8,
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Buddha",
  },
  {
    id: 9,
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
  },
  {
    id: 10,
    quote: "In the middle of every difficulty lies opportunity.",
    source: "Albert Einstein",
  },
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve HTML page with 5 random quotes
app.get("/", (req, res) => {
  const shuffledQuotes = [...quotes].sort(() => 0.5 - Math.random());
  const randomQuotes = shuffledQuotes.slice(0, 5);
  // Send the HTML response
  res.render("index.ejs", {
    randomQuotes: randomQuotes,
  });
});

app.get("/all-quotes", (req, res) => {
  res.json(quotes);
});

// Add a new quote
app.post("/add", (req, res) => {
  const { quote, source } = req.body;
  // Validate data
  if (!quote) {
    return res.status(400).json({ error: "Some errors occur!" });
  }

  const newQuote = {
    id: quotes.length + 1,
    quote,
    source: source || "unknown",
  };
  quotes = [...quotes, newQuote];

  res.status(201).json(quotes);
});

// Get a random quote of the day
app.get("/daily", (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  if (quotes) {
    const randomDailyQuote = quotes[random];
    res.json(randomDailyQuote);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
