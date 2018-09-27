const vm = require('vm');
const shell = require('shelljs');
const express = require('express');
const router = express.Router();

module.exports = app => {

  router.get('/', (req, res) => {
    const jobs = app.db.getCollection('jobs').find();
    res.json(jobs);
  });

  router.get('/:id(\\d+)', (req, res) => {
    const job = app.db.getCollection('jobs').get(req.params.id);
    if (job) {
      res.json(job);
    } else {
      res.status(404).send('Not Found');
    }
  });

  router.get('/next', (req, res) => {
    const job = app.db.getCollection('jobs').findOne({ status: 'pending'});
    res.json(job);
  });

  router.put('/', (req, res) => {
    const job = app.db.getCollection('jobs').insert({
      type: req.body.type,
      input: req.body.input,
      data: req.body.data,
      output: {},
      status: 'pending'
    });
    res.json(job.$loki);
  });

  router.put('/execute', (req, res) => {
    const sandbox = {
      shell: shell,
      input: req.body.input,
      output: {}
    };
    vm.createContext(sandbox);
    sandbox.output.$result = vm.runInContext(req.body.data, sandbox);
    res.json(sandbox.output);
  });

  return router;
};
