const { Schema, model } = require('mongoose');
const InventoryItem = require('./InventoryItem');

const inventorySchema = new Schema({
  items: {
    type: Schema.Types.ObjectId,
    ref: 'InventoryItem',
  }
  });

module.exports = inventorySchema;