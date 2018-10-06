const apis = [
  'apps',
  'jobs'
];

module.exports = (app) => {
  apis.map(api => {
    app.use(`/api/${api}`, require(`./${api}`)(app));
  });
};
