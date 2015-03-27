var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/auth_demo', function(){
	console.log("connect to databse")
})

var user = mongoose.Schema({
	username: String,
	paswword: {type: String, select: false}
})

module.exports = mongoose.model('User', user)