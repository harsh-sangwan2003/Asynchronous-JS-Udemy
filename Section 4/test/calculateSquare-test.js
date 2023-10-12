const calculateSquare = require('../calculateSqure.js');
const expect = require('chai').expect;

describe('calculateSquare', function () {

    it('should return 4 if passed 2', function (done) {

        calculateSquare(2, function (error, result) {

            console.log('callback gets called');
            expect(result).to.equal(4);
            done();
        })
    })
})