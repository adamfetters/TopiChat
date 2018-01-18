const express = require('express');
const { hashedPassword } = require('../middlewares/middlewares');

const userControllers = require('../controllers/UserControllers');

module.exports = (app) => {
  const router = express.Router();

  router.route('/users').post(hashedPassword, userControllers.createUser);

  app.use('/api', router);
};

