const { Schema, model } = require('mongoose');
const infoSchema = require('./ItemInfo');
// Schema to create InventoryItem model, info is a referenced schema
const itemSchema = new Schema(
    {
      group: {
        type: String,
        required: true,
      },
      kind: {
        type: String,
        required: true,
      },
      info: infoSchema,
    }
  );

// const InventoryItem = model('InventoryItem', itemSchema);

module.exports = itemSchema;