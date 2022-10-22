const { Schema, model } = require('mongoose');

const statSchema = new Schema(
    {

    }
  );

const Stats = model('Stats', statSchema);

module.exports = Stats;