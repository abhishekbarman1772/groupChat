const Jwt = require('../models/Jwt');
const { signJwt, getToken } = require('../utils/jwt');

class UserService {
  async registerJwt(id) {
    const token = await signJwt(id);
    await Jwt.create({ token, owner: id });
    return token;
  }

  async removeJwt(req) {
    const token = await getToken(req);
    await Jwt.deleteOne({ token });
  }
}

module.exports = UserService;
