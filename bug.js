const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data ...
  if (!userData) {
    res.status(404).send('User not found'); // Correct response for a missing user
  }
  res.json(userData); // Missing error handling for database errors
});