const { Schema, model } = require('mongoose');
const languageSchema = require('./Language');
const proficiencySchema = require('./Proficiency');
const featSchema = require('./Feat');

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
            type: Schema.Types.ObjectId,
            ref: 'Language',
          },
        proficiences: {
            type: Schema.Types.ObjectId,
            ref: 'Proficiency',
          },
        feats: {
            type: Schema.Types.ObjectId,
            ref: 'Feat',
          },
    }
  );

const Traits = model('Traits', traitSchema);

module.exports = Traits;
