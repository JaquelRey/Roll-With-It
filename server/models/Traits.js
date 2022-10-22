const { Schema, model } = require('mongoose');

const traitSchema = new Schema(
    {

    }
  );

const Traits = model('Traits', traitSchema);

module.exports = Traits;