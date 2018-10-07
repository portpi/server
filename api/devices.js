const express = require('express');
const filesystem = require('fs-filesystem').default;

const router = express.Router();

module.exports = app => {

  router.get('/', (req, res) => {
    console.log(filesystem);
    filesystem(undefined, (err, result) => {
      res.json(result);
    });
  });

  return router;
};
