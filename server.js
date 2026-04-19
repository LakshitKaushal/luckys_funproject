const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/message', (req, res) => {
  res.json({
    mainMessage: "I'm really sorry... forgive me? ily",
    hiddenNote: "You mean the world to me and I promise to make it up to you! Your smile is my favorite thing in the universe and I never want to be the reason it disappears. I love you more than words can express! ilyyy"
  });
});

// Serve static files from React app in production only
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // The "catchall" handler: for any request that doesn't match one above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
