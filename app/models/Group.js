const { Schema, model, Types } = require('mongoose');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: Types.ObjectId,
    ref: 'Users',
    required: true
  },
  users: [{ type: Types.ObjectId, ref: 'Users' }],
}, {
  timestamps: true,
});

module.exports = model('Groups', groupSchema);
