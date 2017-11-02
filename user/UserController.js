var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var User = require('./User');

router.post('/', function (req,res) {
	console.log(req.body);
	User.create({
		name : req.body.name,
		email : req.body.email,
		password : req.body.password
	},
	function (err, user) {
		if (err) return res.status(500).send("There was like, a problem adding the info to the db. dude");
		res.status(200).send(user);
	});
});

router.get('/', function (req, res) {

    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was, um I guess a problem finding the users. Bummer");
        res.status(200).send(users);
    });
});

router.get('/:id', function (req,res) {
	User.findById(req.params.id, function(err, user) {
		if (err) return res.status(500).send("Well crap dude, something just went wrong. Try again later..");
		if (!user) return res.status(404).send('Um dunno about that user. That guy seems not to be around, y know ');
		res.status(200).send(user);
	});
});

router.delete('/:id', function (req,res) {
	User.findByIdAndRemove(req.params.id, function(err, user) {
		if (err) return res.status(500).send("You sure you want to do this?? Seems like great guy... and anyways, something went wrong.");
		res.status(200).send('Got rid of ' + user.name + ', hope your happy now');
	});
});

router.put('/:id', function (req,res) {
	User.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, user) {
		if (err) return res.status(500).send("Man I don't want to update, it's a hassle..");
		res.status(200).send(user);
	});
});

module.exports = router;

