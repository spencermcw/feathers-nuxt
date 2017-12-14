const { render } = require('./nuxt');

module.exports = function (app) { // eslint-disable-line no-unused-vars
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  app.use((req, res, next) => {
    if (req.baseUrl === 'nuxt') {
      render(req, res, next);
    } else {
      next();
    }
  });
};
