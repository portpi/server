const express = require('express');
const fs = require('fs');
const _ = require('lodash');

const router = express.Router();

module.exports = app => {

  router.get('/list/*', (req, res) => {
    const path = '/' + req.params[0];

    fs.readdir(path, (err, files) => {
      if (err) {
        res.json({
          error: err
        });
      } else {
        res.json({
          path: path,
          files: _.map(files, file => {
            const stat = fs.statSync(`${path}/${file}`);
            
            return {
              name: file,
              type: stat.isFile() ? 'file' : 'directory',
              stat: stat
            };
          })
        });
      }
    });
  });

  return router;
};
