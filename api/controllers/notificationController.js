'use strict';

var mongoose = require('mongoose'),
Notifications = mongoose.model('Notifications');

exports.read_notifications = function(req, res) {
    Notifications.find({}, function(err, task) { 
        if (err)
            res.send(err);
        res.json(task);
    });
};