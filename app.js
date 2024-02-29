const express = require('express');
const translateRoute = require('./src/routes/translateRoute');
const errorHandler = require('./src/middleware/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1', translateRoute);

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Welcome to the English to French Translation API!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
