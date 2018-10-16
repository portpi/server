const express = require('express');
const fs = require('fs-extra');
const _ = require('lodash');
const path = require('path');

const router = express.Router();

const APPS_ROOT = path.join(__dirname, '..', '..', 'apps');

module.exports = app => {

  const apps = [];

  function loadApps() {
    const list = fs.readdirSync(APPS_ROOT);

    // unload current apps
    apps.length = 0;

    // load all apps
    list.forEach(name => {
      const path = `${APPS_ROOT}/${name}`;
      const entryFile = `${path}/package.json`;

      if (fs.existsSync(entryFile)) {
        const info = fs.readJsonSync(entryFile);

        apps.push({
          name: name,
          displayName: _.startCase(name),
          path: path,
          info: info
        });

        app.use(`/app/${name}`, express.static(path));
      }
    });
  }

  loadApps();

  router.get('/', (req, res) => {
    res.json(apps);
  });

  router.get('/:name', (req, res) => {
    res.json(_.find(apps, {name: req.params.name}));
  });

  return router;
};
