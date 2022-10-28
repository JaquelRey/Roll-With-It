const { Schema, model } = require('mongoose');
const featSchema = require('./Feat');
const languageSchema = require('./Language');
const proficiencySchema = require('./Proficiency');

const traitSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            max_length: 50,
        },
        level: {
            type: Number,
            required: true,
            default: 1
        },
        description: {
            type: String,
            required: true,
        },
        race: {
            type: String,
            required: true,
        },
        characterclass: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
        languages: [languageSchema],
        proficiencies: [proficiencySchema],
        feats: [featSchema],
    }
  );

// const Traits = model('Traits', traitSchema);

module.exports = traitSchema;
