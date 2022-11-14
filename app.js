
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get('/',function(req, res){
  var today = new Date();
  if(today.getDate() === 6 || today.getDate() === 0){
    res.send("today is weekend.");
  }else{
    res.send("Today is weekday.");
  };
});





app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
