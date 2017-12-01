"use strict";
var express = require("express");
var mongoose = require('mongoose');
var app = express();
var JsonParser = require("body-parser");
var plumber = require("./models");
var mongodb = require('mongodb');

app.use(express.static(__dirname + '/public'));


app.use(JsonParser.json());
app.use(JsonParser.urlencoded({
  extended: true
}));

var logger = require("morgan");
app.use(logger("dev"));






app.post("/api/plumbers/slots/:slot/days/:day", function(req, res,next) {
  console.log(req.body);
// var slot=req.params.slot;
var plumberName=req.body;
var username=req.params.username;
var slot=req.params.slot;
var days=req.params.days;
var objectDays={};
if(!Array.isArray(days)){
  days=[days];
}
days.forEach(function(day){
  objectDays[day]=true;
})
console.log("@@@@",days);
plumber.findOneAndUpdate({

  Slots:plumberName.slot,
  days:plumberName.day
},function(err,results){
  console.log(results);
if(err){
  return err;
}
else{
  res.json({
    Slots:results,
    days:results
  })
}
})
})




app.get("/api/plumbers/:id/bookings", function(req, res) {
  var id =req.params.id;
  console.log(id);
  plumber.findOneAndUpdate({
   _id:Object(id)
 },{
   $inc:{
     username:-1
   },},{
     upsert:false,
     new:true
   },function(err,reslt){
     if(err){
       console.log(reslt);
       return err;
     }
     else{
       res.json({
         data:results
       })
     }
   })
 })


 app.post("/api/plumbers", function(req, res) {
   console.log(req.body);
   plumber.create({
     username:req.body.username,
     email:req.body.email,
     contact_Number: Number(req.body.contact_Number),
     days:req.body.days,
     Slots:req.body.Slots
   },function(err,results){
     if(err)  {
       console.log(err);
     }


     plumber.findOne({

     },function(err,results){
       if(err) {
         res.json({err})
       } else {
         res.json({results});
       }
     });
   });
 });
var port = process.env.PORT || 3005;
app.listen(port, function() {
  console.log("Express server is listening on port", port);
});
