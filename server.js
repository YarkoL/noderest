var app = require('./app');
var port = 3017;
var server = app.listen(port, function() {
	console.log('server listening on port ' + port);
});