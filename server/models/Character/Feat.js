const { Schema, model } = require('mongoose');

const featSchema = new Schema(
    {
        feat: {
            type: String,
            required: true,
        },
    }
  );

// const Feat = model('Feat', featSchema);

module.exports = featSchema;