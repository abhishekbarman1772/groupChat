const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  group: { type: Types.ObjectId, ref: 'Groups', required: true },
  likedBy: [{ type: Types.ObjectId, ref: 'Users' }],
}, {
  timestamps: true,
});

module.exports = model('Messages', messageSchema);
