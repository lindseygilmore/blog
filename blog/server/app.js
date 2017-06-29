//full stack!!//
//step 2 - get server running//
//step 5 - set up app.set code//
//step 9 - link up PostController.js//

//what is express? a web framework written in node that allows us to build a web application
var express = require('express'),
	app 	= express(),
	//http is part of node
	server	= require('http').createServer(app),
	//path is part of node
	path 	= require('path');

	require('./db/db.js');

var PostController = require('./controllers/PostController');

app.use('/posts', PostController);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //npm install hbs

console.log(__dirname);

server.listen(3000, function(){
	console.log('listening on port 3000')
})


