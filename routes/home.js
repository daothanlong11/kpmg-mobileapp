var express = require("express");
var router = express.Router();

var inject_data = {
  "000000": {
      name: "Nguyen Van A",
      day_of_birth: "01-01-1998",
      gender:"Male",
      phonenumber:"+8400010002",
      email: "nguyenvana@gmail.com",
      city:"hochiminh",
      district:"1"
  },
  "000001":{
      name: "Nguyen Van B",
      gender:"Male",
      day_of_birth: "01-01-1997",
      phonenumber:"+8400010003",
      email:"hochiminh",
      district:"3"
  },
  "000002":{
      name: "Dao Thanh Long",
      gender:"Male",
      day_of_birth: "05-11-1998",
      phonenumber:"+840932056643",
      email: "daothanhlong1111@gmail.com",
      city:"hochiminh",
      district:"2"
  }
}


router.get("/", function (req, res) {
  //res.send("download command received");
  res.render("login", { 
    layout: "login.handlebars"   
  });
});

router.post("/", function (req, res) {
  //res.send("download command received");
  res.render("home", { 
    layout: "home.handlebars",
  });
});


router.post("/confirm", function(req, res){
  if (inject_data[req.body.vaccination_code] != undefined){
    res.send(inject_data[req.body.vaccination_code]);
  }
  else {
    res.send("undefined");
  }
});

module.exports = router;
