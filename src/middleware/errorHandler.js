function errorHandler(err, req, res, next) {
  console.error('Error:', err.message);

  // Default to 500 Internal Server Error
  let statusCode = 500;
  let errorMessage = 'Internal Server Error';

  if (err.code === 'ENOTFOUND') {
    statusCode = 404;
    errorMessage = 'Translation service not found';
  }

  res.status(statusCode).json({ error: errorMessage });
}

module.exports = errorHandler;
