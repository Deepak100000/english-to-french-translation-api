const translate = require('translate-google');

async function translateToFrench(text) {
  // Perform translation using the translate-google library
  try {
    const translation = await translate(text, { to: 'fr' });
    return translation;
  } catch (error) {
    throw error;
  }
}

module.exports = { translateToFrench };
