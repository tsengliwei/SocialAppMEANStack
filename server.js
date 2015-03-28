var express = require('express')
var logger = require('morgan')
var websockets = require('./websockets')

// var bodyParser = require('body-parser')
// var Post = require('./models/post')

var app = express()
app.use(logger('dev'))
app.use(require('./controllers'))

var port = process.env.PORT || 3000
var server = app.listen(port, function(){
	console.log('Server', process.pid, 'listening on', port)
})

websockets.connect(server)
// app.use(require('./auth'))

// app.use(bodyParser.json())

// app.use('/api/posts',require('./controllers/api/posts'))
// app.use('/api/sessions', require('./controllers/api/sessions'))
// app.use('/api/users', require('./controllers/api/users'))
// app.use(require('./controllers/static'))
// // equivalent to app.use('/', require('./controllers/static'))


// var port = process.env.PORT || 3000
// var server = app.listen(port, function(){
// 	console.log('Server', process.pid, 'listening on', port)
// })

// require('./websockets').connect(server)