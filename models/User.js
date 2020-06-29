const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  female: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  user: { type: String, default: "user" },
  course: [{ type: Types.ObjectId, ref: 'Course' }]
});

module.exports = model('User', schema);
