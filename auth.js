var jwt = require('jwt-simple')
var config = require('./config')

var auth = function(req, res, next){
	if (req.headers['x-auth']) {
		req.auth = jwt.decode(req.headers['x-auth'], config.secret)
	};
	next()
}

module.exports = auth