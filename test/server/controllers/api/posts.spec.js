var expect = require('chai').expect
var api = require('../../support/api')
var Post = require('../../../../models/post')
var api = require('../../support/api')
var user = require('../../support/user')
// var ctrl = require('../../../../controllers/api/posts')

// describe('controllers.api.posts', function(){
// 	it('exists', function(){
// 		expect(ctrl).to.exist
// 	})
// })

// var request = require('supertest')
// var express = require('express')
// var app = express()

// app.get('/user', function(req, res){
// 	res.status(200).send({name: 'liwei'})
// })

// describe('GET /users', function(){
// 	it('responds with proper json', function (done){
// 		request(app)
// 		.get('/user')
// 		.expect('Content-Type', /json/)
// 		.expect({name: 'liwei'}, done)
// 	})
// })


describe('controllers.api.posts', function(){
	beforeEach(function (done){
		Post.remove({}, done)
	})
	describe('GET /api/posts', function(){
		beforeEach(function(done){
			var posts = [
				{body: 'post1', usernmae: 'liwei'},
				{body: 'post2', username: 'liwei'},
				{body: 'post3', username: 'liwei'}
			]
			Post.create(posts, done)
		})
	

		it('has 3 posts', function(done){
			api.get('/api/posts')
			.expect(200)
			.expect(function(posts){
				if (posts.body.length !== 3) {
					return "post count should be 3"
				};
			})
			.end(done)
		})
	})
})

describe('POST /api/posts', function(){
	var token

	beforeEach(function(done){
		user.create('liwei', 'pass', function(err, user){
			token = user.token
			done(err)
		})
	})

	beforeEach(function (done){
		api.post('/api/posts')
		.send({body: 'this is my new post'})
		.set('X-Auth', token)
		.expect(201)
		.end(done)
	})

	it('added 1 new post', function(done){
		Post.findOne(function(err, post){
			expect(post.body).to.equal('this is my new post')
			done(err
				)
		})
	})
})


// describe('controllers.api.posts', function(){
// 	describe('GET /api/posts', function(){
// 		it('exists', function(done){
// 			api.get('/api/posts')
// 			.expect(200)
// 			.end(done)
// 	})
// 	})
	
// })