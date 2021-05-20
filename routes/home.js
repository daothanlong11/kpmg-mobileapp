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

var single_dose_location = {
  "s1": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "s2": [
    "Location 1",
    "Location 2",
    "Location 4",
    "Location 5",
  ],
  "s3": [
    "Location 1",    
    "Location 3",   
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "s4": [
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "s5": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "s6": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
  ],
  "s7": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
}

var combo_dose_location = {
  "c1": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "c2": [
    "Location 1",
    "Location 2",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "c3": [
    "Location 1",    
    "Location 3",   
    "Location 6",
    "Location 8"
  ],
  "c4": [
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
  "c5": [
    "Location 1",
    "Location 2",
    "Location 8"
  ],
  "c6": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
  ],
  "c7": [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 6",
    "Location 7",
    "Location 8"
  ],
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

router.post("/single_dose", function(req,res){
  var single_dose_code = req.body.single_dose_code;
  res.send(single_dose_location[single_dose_code]);
})

router.post("/combo_dose", function(req,res){
  var combo_dose_code = req.body.combo_dose_code;
  res.send(combo_dose_location[combo_dose_code]);
})

module.exports = router;
