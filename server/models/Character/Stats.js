const { Schema, model } = require('mongoose');
const skillsSchema = require('./Skill');

const statSchema = new Schema(
    {
      strength: {
        type: Number,
        required: true,
      },
      dexterity: {
        type: Number,
        required: true,
      },
      constitution: {
        type: Number,
        required: true,
      },
      intelligence: {
        type: Number,
        required: true,
      },
      wisdom: {
        type: Number,
        required: true,
      },
      charisma: {
        type: Number,
        required: true,
      },
      hit_points: {
        type: Number,
        required: true,
      },
      death_saves: {
        type: Number,
        required: true,
      },
      skills: [skillsSchema],
    }
  );


module.exports = statSchema;