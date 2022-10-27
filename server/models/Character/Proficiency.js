const { Schema, model } = require('mongoose');

// Proficiency in a skill
const proficiencySchema = new Schema(
    {
        proficiency: {
            type: String,
            required: true,
        },
    }
  );

const Proficiency = model('Proficiency', proficiencySchema);

module.exports = Proficiency;
