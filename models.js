var mongoose = require('mongoose');
var Schema=mongoose.Schema;
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost:/plumber";

mongoose.connection.on("error", function(err){
  console.log(err);
});

mongoose.connect(mongoURL,{
  useMongoClient:true
},function(err) {
  if (err) {
    console.log('error connection');
  } else {
    console.log('database connection success');
  }
});

var archive=mongoose.model('archive',{
  username:String,
  email:String,
  contact_Number:Number,
  days:Object,
  Slots:String


});
module.exports=archive;
