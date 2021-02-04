var express = require("express");
var router = express.Router();







router.get("/", function (req, res) {
  //res.send("download command received");
  res.render("login", { 
    layout: "login.handlebars",
  });
});

router.post("/", function (req, res) {
  //res.send("download command received");
  res.render("home", { 
    layout: "home.handlebars",
  });
});



module.exports = router;
