var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true}));

var User = require('./User');

router.post('/', function (req,res) {
	User.create({
		name : req.body.name,
		email : req.body.email,
		password : req.body.password
	},
	function (err, user) {
		if (err) 
			return res.status(500).send("There was like, a problem adding the info to the db. dude");
		res.status(200).send(user);
	});
});

// RETURNS ALL THE USERS IN THE DATABASE or fails gently
router.get('/', function (req, res) {

    User.find({}, function (err, users) {
        if (err) 
        	return res.status(500).send("There was, um I guess a problem finding the users. Bummer");
        res.status(200).send(users);
    });

});

module.exports = router;

