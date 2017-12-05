"use strict";
var express = require("express");
var mongoose = require('mongoose');
var app = express();
var JsonParser = require("body-parser");
var plumber = require("./models");
var ObjectId = require('mongodb').ObjectId;

app.use(express.static(__dirname + '/public'));


app.use(JsonParser.json());
app.use(JsonParser.urlencoded({
  extended: true
}));

var logger = require("morgan");
app.use(logger("dev"));






app.post("/api/plumbers/slots/:slot/days/:day", function(req, res, next) {

  var slot = req.params.slots;
  var days = req.params.days;
  console.log("@@@@", days);
  plumber.find({

    Slots: slot,
    days: days
  }, function(err, results) {
    console.log(results);
    if (err) {
      return err;
    } else {
      res.json({
        status: "success",
        reslt: results
      })
    }
  })
})




app.get("/api/plumbers/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  plumber.findOne({
    _id: ObjectId(id)
  }, function(err, reslt) {
    if (err) {

      return res.json({
        status: "error",
        error: err,
        results: []
      })
    } else {
      res.json({
        results: reslt,
        status: "success"
      })
    }
  })
})


app.post("/api/plumbers", function(req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var contact_Number = req.body.contact_Number;
  var days = req.body.days;
  var Slots = req.body.Slots;
  plumber.create({
    username: username,
    email: email,
    contact_Number: contact_Number,
    days: days,
    Slots: Slots
  }, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        results
      });
    }

  });
})



app.get("/api/plumbers", function(req, res) {

  plumber.find({}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        data
      });
    }

  });
})







var port = process.env.PORT || 3005;
app.listen(port, function() {
  console.log("Express server is listening on port", port);
});
