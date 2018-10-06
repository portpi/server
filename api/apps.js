const express = require('express');
const router = express.Router();

module.exports = app => {

  router.get('/', (req, res) => {
    res.json([
      {
        name: 'Overview'
      }
    ]);
  });

  return router;
};
