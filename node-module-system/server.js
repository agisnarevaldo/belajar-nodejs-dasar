var http = require('http');

var server = http.createServer(function (req, res) {
   	res.writeHead(200, {'content-Type': 'text/html'});
	res.write('Hello <b>World</b>');
	res.end();
});

server.listen(8000);

console.log("Server running on http://localhost:8000");
