const { Schema, model } = require('mongoose');

// Schema to create ItemStats model
// Will have several different results for keys and values when populated
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

const itemStatsSchema = new GraphQLObjectType({
  name: 'ItemStats',

  fields: {
    itemstat: { type: GraphQLJSON },
    myObject: { type: GraphQLJSONObject },
  },
});

const ItemStats = model('ItemStats', itemStatsSchema);

module.exports = ItemStats;