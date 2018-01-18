const User = require('../models/users');
const { sendUserError } = require('../middlewares/middlewares');

const createUser = ((req, res) => {
  const { email } = req.body;
  const passwordHash = req.password;
  console.log(email);

  const newUser = new User({ email, passwordHash });
  newUser.save((err, savedUser) => {
    if (err) {
      sendUserError('Need both email/Password field', res);
    } else {
      res.json(savedUser);
    }
  });
});

module.exports = {
  createUser,
};

