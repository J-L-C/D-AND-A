const {reverse} = require('../../main/recursion/StringReversal');
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('String Reversal: recursion', () => {

    it('should return itself when given a string of length one', () => {
        assert.equal(reverse('a'),'a')
    })

    it('should reverse a two character word', () => {
        assert.equal(reverse('ab'), 'ba')
    })

    it('should reverse a three character word', () => {
        assert.equal(reverse('abc'), 'cba')
    })

    it('should reverse a whole sentence', () => {
        assert.equal(reverse('Few quips galvanized the mock jury box.'), '.xob yruj kcom eht dezinavlag spiuq weF')
    })
})