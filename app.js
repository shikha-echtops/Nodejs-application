var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(80, function () {
	console.log('App is listening on port 80');
});

