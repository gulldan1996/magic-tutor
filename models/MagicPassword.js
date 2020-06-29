const { Schema, model } = require('mongoose');

const schema = new Schema({
  password: { type: String, required: true }
});

module.exports = model('MagicPassword', schema);
