'use strict';
module.exports = function(app) {
  var pingController = require('../controllers/pingController');
  var notificationController = require('../controllers/notificationController');

  app.route('/ping')
    .get(pingController.ping);

  app.route('/dataSources')
    .get(notificationController.read_notifications);

  app.route('/dataSource/:id')
    .get(notificationController.find_notification);

  app.route('/dataSource')
    .put(notificationController.insert_notification);
};