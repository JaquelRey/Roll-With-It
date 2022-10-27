const { Schema, model } = require('mongoose');

// Schema to create ItemStats model
// Will have several different results for keys and values when populated
const itemStatsSchema = new Schema(
    { any: {} }
  );

const ItemStats = model('ItemStats', itemStatsSchema);

module.exports = ItemStats;