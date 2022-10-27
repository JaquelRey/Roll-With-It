const { Schema, model } = require('mongoose');

// Modifier is the stat (strength, dexterity, etc.)
const skillsSchema = new Schema(
    {
        skill: {
            type: String,
            required: true,
        },
        proficient: {
            type: Boolean,
            required: true,
        },
    }
  );

// const Skill = model('Skill', skillSchema);

module.exports = skillsSchema;