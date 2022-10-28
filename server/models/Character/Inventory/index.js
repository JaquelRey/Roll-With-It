const { Schema, model } = require('mongoose');
const itemSchema = require('./InventoryItem');

const inventorySchema = new Schema({
  items: [itemSchema]
  });

module.exports = inventorySchema;