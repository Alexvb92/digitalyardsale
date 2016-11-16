'use strict';

var Nightmare = require('nightmare'),
	should = require('chai').should();

	describe('Digital Yard Sale', function() {

	var login = "";

	it('should require me to login', function(){
		Nightmare({show: true})
			.goto('http://localhost:3000/login')
			.wait(login)
			.click(login)
			.evalutate(function() {
				document.title.should.equal('Digital Yard Sale');
			});
	});

	it('should present multiple workshop choices after login', function(){

		Nightmare()
			.goto('http://localhost:3000/login')
			.wait(login)
			.click(login)
			.evalutate(function() {
				document.title.should.equal('Digital Yard Sale')
			})

			.type('', 'fullers@unc.edu')
			.type('', 'guk@mem99!')
			.click('')

			.evalutate(function() {
				return document.querySelectorAll('');

			})
			.then(function(param){
				param.should.be.above(1)
			});

	it('should', function () {
		// throu new Error('Failed on purpose, just to make the Mocha output more interesting.');
});
});