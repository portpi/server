const routes = [
  'jobs'
];

module.exports = (app) => {
  routes.map(route => {
    app.use(`/api/${route}`, require(`./${route}`)(app));
  });
};
