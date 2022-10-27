const { Schema, model } = require('mongoose');
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
      info: {
        type: Schema.Types.ObjectId,
        ref: 'ItemInfo',
      },
    }
  );

const InventoryItem = model('InventoryItem', itemSchema);

module.exports = InventoryItem;