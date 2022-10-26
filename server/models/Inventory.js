const { Schema, model } = require('mongoose');
const InventoryItem = require('./Inventory/InventoryItem');

const inventorySchema = new Schema({
  items: {
    type: Schema.Types.ObjectId,
    ref: 'InventoryItem',
  }
  });

const Inventory = model('Inventory', inventorySchema);

module.exports = Inventory;