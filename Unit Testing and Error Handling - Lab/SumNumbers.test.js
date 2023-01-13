const {expect} = require('chai');
const {sum} = require('./SumNumbers.js');

describe('Check that sum', () => {

    it('It takes array and return the sum', () => {

        expect(sum([1,2,2,1])).to.equal(6);
    });

    it('It returns the sum if recive a string', () => {

        expect(sum('1221')).to.equal(6);
    })
});