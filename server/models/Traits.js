const { Schema, model } = require('mongoose');

const traitSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            max_length: 50,
        },
        description: {
            type: String,
            required: true,
        },
        race: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
        languages: {
            type: [String],
            required: true,
        },
        proficiences: {
            type: [String],
            required: true,
        },
        feats: {
            type: [String],
            required: true,
        },
    }
  );

const Traits = model('Traits', traitSchema);

module.exports = Traits;
