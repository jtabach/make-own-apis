'use strict';

var PORT = 4000;
var md5 = require('md5');
var http = require("http");
var math = require('./math');

var server = http.createServer(function(req, res) {
	var urlParts = req.url.match(/[^/]+/g);
	var hash = md5(urlParts[1]);

	switch(urlParts[0]) {
		case 'math': 
			if (urlParts[1] === 'add') {
				res.end(math.add(urlParts.slice(2)) + '\n');
			}
			if (urlParts[1] === 'square') {
				res.end(math.square(urlParts[2]) + '\n');
			}
			break;
		case 'gravatar':
			res.end('http://www.gravatar.com/avatar/' + hash + '\n');
			break;
		case 'sentence':
			var arr = urlParts[1].split('%20');
			console.log(urlParts);
			var obj = {
				'letters': arr.join('').replace(/[^A-Za-z]/g,'').length, // Note, this is a letter count, not character count
				'spaces': arr.length - 1,
				'words': urlParts[1].replace(/[^%0-9A-Za-z]/g,'').split('%20').filter(function(elem) {
					return elem !== "";
				}).length
			};
			urlParts[1].split('%20').length;
			res.end(JSON.stringify(obj) + '\n');
			break;
		default:
			res.end('nothing\n');
	}
})

server.listen(PORT, function() {
	console.log('Node server listening on port ' + PORT);
});