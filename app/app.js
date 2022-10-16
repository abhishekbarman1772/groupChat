const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { expressjwt } = require('express-jwt');
const routes = require('./routes/index');
const { JWT_SECRET, ALLOWED_PATHS } = require('../config/const');
const Jwt = require('./models/Jwt');
const { getToken, verifyJwt } = require('./utils/jwt');
const Users = require('./models/User');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan('common'));

app.use(
  expressjwt({
    secret: JWT_SECRET,
    algorithms: ['HS256'],
  }).unless({ path: ALLOWED_PATHS }),
);

app.use(async (req, res, next) => {
  if (ALLOWED_PATHS.includes(req.path)) {
    next();
  } else {
    const token = await getToken(req);
    if (!await Jwt.findOne({ token })) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    const { id } = await verifyJwt(token);
    req.user = await Users.findById(id).lean();
    next();
  }
});

app.use('/api/v1', routes);

module.exports = app;
