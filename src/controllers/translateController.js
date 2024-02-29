const translationService = require('../services/translationService');

async function translate(req, res, next) {
  try {
    // Check if the request body contains the 'text' key
    const { text } = req.body;
    if (!text) {
      return res
        .status(400)
        .json({ error: 'Missing "text" key in the request body' });
    }

    const translation = await translationService.translateToFrench(text);

    res.status(200).json({ translation });
  } catch (error) {
    next(error);
  }
}

module.exports = { translate };
