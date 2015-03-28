var db = require('../../db')
var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = chai.expect

describe('making a post', function(){
	it('logs in and creates a new post', function (){
		// go to homepage
		browser.get('http://localhost:3001')

		// click 'login'
		element(by.css('nav .login')).click()

		// fill out and submit login form
		element(by.model('username')).sendKeys('liwei')
		element(by.model('password')).sendKeys('pass')
		element(by.css('form .btn')).click()

		// submit a new post on the posts page
		element(by.css('nav .posts')).click()
		var post = 'my new post' + Math.random()
		element(by.model('postBody')).sendKeys(post)
		element(by.css('form .btn')).click()

		// the user should now see their post as the first post on the page
		expect(element.all(by.css('ul.list-group li')).first().getText()).to.eventually.contain(post)
		// element.all(by.css('ul.list-group li')).first().getText().
		// then(function(text){
		// 	expect(text).to.contain(post)
		// })
	})
	// afterEach(function(){
	// 	db.connection.db.dropDatabase()
	// })
})