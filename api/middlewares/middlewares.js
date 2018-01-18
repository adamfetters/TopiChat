const User = require('../models/users');
const bcrypt = require('bcrypt');

const STATUS_USER_ERROR = 422;
const BCRYPT_COST = 11;

const sendUserError = (err, res) => {
  res.status(STATUS_USER_ERROR);
  if (err && err.message) {
    res.json({ message: err.message, stack: err.stack });
  } else {
    res.json({ error: err });
  }
};

/* ************Middelwares *************** */
const hashedPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    sendUserError('Must have a password', res);
  }
  bcrypt
    .hash(password, BCRYPT_COST)
    .then((pw) => {
      req.password = pw;
      next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const loggedIn = (req, res, next) => {
  const { username } = req.session;
  if (!username) {
    sendUserError('User is not logged in', res);
  }
  User.findOne({ username }, (err, user) => {
    if (err) {
      sendUserError(err, res);
    } else if (!user) {
      sendUserError('User doees not exist', res);
    } else {
      req.user = user;
      next();
    }
  });
};

const restrictedPermissions = (req, res, next) => {
  const { path } = req;
  if (/restricted/.test(path)) {
    if (!req.session.username) {
      sendUserError('User is not authorized', res);
    }
  }
  next();
};

module.exports = {
  sendUserError,
  hashedPassword,
  loggedIn,
  restrictedPermissions,
};

