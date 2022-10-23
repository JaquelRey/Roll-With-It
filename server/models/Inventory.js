const { Schema, model } = require('mongoose');
const InventoryItem = require('./Inventory/InventoryItem');

const inventorySchema = new Schema({
  items: [InventoryItem]
  });

const Inventory = model('Inventory', inventorySchema);

module.exports = Inventory;