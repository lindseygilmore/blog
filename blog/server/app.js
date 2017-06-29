//full stack!!//

//what is express? a web framework written in node that allows us to build a web application
var express = require('express'),
	app 	= express(),
	//http is part of node
	server	= require('http').createServer(app),
	//path is part of node
	path 	= require('path');

	require('./db/db.js');


server.listen(3000, function(){
	console.log('listening on port 3000')
})


