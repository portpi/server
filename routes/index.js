const routes = [
  'jobs'
];

module.exports = (app) => {
  routes.map(route => {
    app.use(`/${route}`, require(`./${route}`)(app));
  });
};
