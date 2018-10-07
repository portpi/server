const apis = [
  'apps',
  'jobs',
  'devices',
  'files'
];

module.exports = (app) => {
  apis.map(api => {
    app.use(`/api/${api}`, require(`./${api}`)(app));
  });
};
