const { render } = require('./nuxt');
const logger = require('winston');

module.exports = function (app) { // eslint-disable-line no-unused-vars
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  app.use((req, res, next) => {
    if (req.baseUrl === 'api') {
      logger.info(req.baseUrl);
      next();
    } else {
      render(req, res, next);
    }
  });
};
