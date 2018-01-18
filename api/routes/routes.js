const express = require('express');

const userControllers = require('../controllers/UserControllers');

module.exports = (app) => {
  const router = express.Router();

  router.route('/users').post(userControllers.createUser);

  app.use('/api', router);
};

