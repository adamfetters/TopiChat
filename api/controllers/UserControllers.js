const User = require('../models/users');
const { hashedPassword, sendUserError } = require('../middlewares/middlewares');

const createUser = (hashedPassword, (req, res) => {
  console.log(req.password);
  const { username } = req.body;
  const passwordHash = req.password;
  const newUser = new User({ username, passwordHash });
  newUser.save((err, savedUser) => {
    if (err) {
      sendUserError('Need both username/Password field', res);
    } else {
      res.json(savedUser);
    }
  });
});

module.exports = {
  createUser,
};

