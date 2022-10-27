const { Schema, model } = require('mongoose');

const languageSchema = new Schema(
    {
        language: {
            type: String,
            required: true,
        },
    }
  );

const Language = model('Language', languageSchema);

module.exports = Language;