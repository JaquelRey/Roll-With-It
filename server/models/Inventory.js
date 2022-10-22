const { Schema, model } = require('mongoose');

const inventorySchema = new Schema(
    {

    }
  );

const Inventory = model('Inventory', inventorySchema);

module.exports = Inventory;