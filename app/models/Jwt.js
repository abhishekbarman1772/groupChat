const { Schema, model } = require('mongoose');
const { JWT_EXPIRES } = require('../../config/const');

const jwtSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
}, {
  timestamps: true,
});

jwtSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: parseInt(JWT_EXPIRES, 10) * 3600 },
);

module.exports = model('Jwt', jwtSchema);
