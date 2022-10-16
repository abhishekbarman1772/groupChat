const User = require('../app/models/User');
const { encryptPassword } = require('../app/utils/helper');

module.exports = async () => {
  const data = [
    {
      email: 'admin@gmail.com',
      username: 'Admin',
      password: await encryptPassword('12345'),
      role: 'admin',
    },
    {
      email: 'user1@gmail.com',
      username: 'Admin',
      password: await encryptPassword('12345'),
      role: 'user',
    },
    {
      email: 'user2@gmail.com',
      username: 'Admin',
      password: await encryptPassword('12345'),
      role: 'user',
    },
  ];
  if (await User.countDocuments() === 0) await User.insertMany(data);
};
