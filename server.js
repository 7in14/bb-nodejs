var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Notification = require('./api/models/notificationModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://7in14-db.documents.azure.com:10255/?ssl=true', {
    auth: {
      user: '7in14-db',
      password: 'CIDWd20A5KCQMXYTSxYHbGlbm4SbwLj1z6yuoK6BwQCCgpjlzdc55VkCeLqRU4EWCUdsW1aDTq7H1SVJQN1BiA=='
    }
  })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //importing routes
routes(app); //register the route

app.listen(port);

console.log('API server started on: ' + port);
