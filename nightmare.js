var Nightmare = require('nightmare'),
	should = require('chai').should();

describe('localhost:3000', function (){
	it('should show page when loaded', function (done){
		Nightmare({ show:true })
		.goto('http://localhost:3000/index')
		.wait('a[href=*')
	})
})