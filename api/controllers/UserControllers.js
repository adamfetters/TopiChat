const User = require('../models/users');
const { sendUserError } = require('../middlewares/middlewares');

const createUser = ((req, res) => {
  const { email } = req.body;
  const passwordHash = req.password;
  const newUser = new User({ email, passwordHash });
  newUser.save((err, savedUser) => {
    if (err) {
      if (err.code === 11000) sendUserError('Email already exists', res);
    } else {
      res.json(savedUser);
    }
  });
});

module.exports = {
  createUser,
};

