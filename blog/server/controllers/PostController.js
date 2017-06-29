//step 8 - create PostController.js//
//step 11 - create POST route for form//

var express = require('express'),
	router 	= express.Router(),
	Post 	= require('../models/Post'),
	bodyParser = require('body-parser');//npm install body-parser

	router.use(bodyParser.urlencoded({extended: true}));

//GET route to /posts/all that response with a view of all posts
router.get('/all', function(request, response){
	response.render('posts');
})

//step 11 - POST route to /posts/form that re
router.post('/form', function(request, response){
	//grab info from request body
	var textVar = request.body.text;
	var titleVar = request.body.title;
	var authorVar = request.body.author;
	var dateVar = request.body.date;

	//create and save new post
	var post = new Post({text: textVar,
		title: titleVar,
		author: authorVar,
		date: dateVar
	})

	post.save();
	response.redirect('/posts/all')

})

module.exports = router;


