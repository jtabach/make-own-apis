'use strict';

var PORT = 4000;

var md5 = require('md5');

var http = require("http");

var server = http.createServer(function(req, res) {
	console.log("request", req.method);
	console.log("url", req.url);
	var email = req.url.match(/[^/]+/g);
	var hash = md5(email[1]);
	res.end('http://www.gravatar.com/avatar/' + hash + '\n');
})

server.listen(PORT, function() {
	console.log('Node server listening on port ' + PORT);
});



// 'use strict';

// var PORT = 4000;

// var http = require('http');
// var math = require('./math');

// var _ = require('lodash');

// var server = http.createServer(function(req, res) {
//   console.log('method:', req.method);
//   console.log('url:', req.url);

//   var urlParts = req.url.match(/[^/]+/g);

//   console.log('urlParts:', urlParts)

//   switch(urlParts[0]) {
//     case 'time':
//       var timestamp = Date.now();
//       res.end(timestamp + '\n');
//       break;
//     case 'math':
//       if(urlParts[1] === 'add') {

//         var a = urlParts[2];
//         var b = urlParts[3];

//         var sumStr = math.sum(a, b);

//         res.end(sumStr + '\n');
//       }
//       break;
//     default:
//       res.end("nothing"); 
//   }

// });

// server.listen(PORT, function() {
//   console.log('Node server listening on port ' + PORT);
// });;
