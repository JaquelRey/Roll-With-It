const { Schema, model } = require('mongoose');
// Schema to create ItemInfo model, cost is a subdocument, while stats is a referenced schema
const infoSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      special: {
        type: String,
        required: true,
      },
      cost: new mongoose.Schema({  
        quantity: Number,
        unit: String
      }),
      weight: {
        type: Number,
        required: true,
      },
      stats: [{
        type: Schema.Types.ObjectId,
        ref: 'ItemStats',
      }],
    }
  );

const ItemInfo = model('ItemInfo', infoSchema);

module.exports = ItemInfo;