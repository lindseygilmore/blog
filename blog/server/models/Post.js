
//step 3 - set up models//

var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
	title: String,
	author: String,
	text: String,
	date: String,
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

var postModel = mongoose.model('Post', PostSchema);

module.exports = postModel;



