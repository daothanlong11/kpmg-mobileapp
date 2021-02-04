var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
	//res.send("download command received");
	res.render("test");	
});

module.exports = router;