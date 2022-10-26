const { Schema, model } = require('mongoose');

// Schema to create Character model (Traits, Stats, and Inventory models are all referenced schemas)
const characterSchema = new Schema(
    {
      image:  {
        type: String,
      },
      traits: {
        type: Schema.Types.ObjectId,
        ref: 'Traits',
      },
      stats: {
        type: Schema.Types.ObjectId,
        ref: 'Stats',
      },
      inventory: {
        type: Schema.Types.ObjectId,
        ref: 'Inventory',
      },
    }
  );

const Character = model('Character', characterSchema);

module.exports = Character;