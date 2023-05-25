const { describe } = require("mocha");

describe('maths', function(){
    var a = 1;
    var b = 4;
    it('test add', function(){
        expect(a==b).to.be.equal(true)
    })
    it('test add two', function(){
        expect(a!=b).to.be.equal(true)
    })
})