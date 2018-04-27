'use strict';

var mongoose = require('mongoose'),
Notification = mongoose.model('Notification');

exports.read_notifications = function(req, res) {
    Notification.find({}, function(err, task) { 
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.json(task);
        }
    });
};

exports.find_notification = function(req, res) {
    Notification.findById(req.params.notificationId, function(err, task) { 
        if (err) {
            res.send(err);
            console.log(err);
        }
        else if (task == null) {
            res.status(404).send();
        }
        else {
            res.json(task);
        }
    });
};

exports.insert_notification = function(req, res) {
    var notification = new Notification(req.body);
    Notification.create(notification, function(err, task) { 
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.status(201).send();
        }
    });
};