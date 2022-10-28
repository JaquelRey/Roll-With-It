const { Schema, model } = require('mongoose');
const traitSchema = require('./Traits')
const statSchema = require('./Stats');
const inventorySchema = require('./Inventory');

// Schema to create Character model (Traits, Stats, and Inventory models are all referenced schemas)
const characterSchema = new Schema(
    {
      image:  {
        type: String,
      },
      traits: {
        type: traitSchema
      },
      stats: {
        type: statSchema
      },
      inventory: {
        type: inventorySchema
      },
    }
  );

const Character = model('Character', characterSchema);

module.exports = {characterSchema, Character};