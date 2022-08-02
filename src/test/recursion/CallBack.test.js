const {callBack} = require('../../main/recursion/CallBack')
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;


describe('CallBack', () => {

    describe('Simple callBack function: odd', ()=>{

        it('returns true with a function that checks if a number is odd in a single item array', () => {
            assert.equal( callBack([3],val=> val % 2 != 0) , true)
        })

        it('returns false with a function that checks if a number is odd given array with all even numbers', () => {
            assert.equal( callBack([6,4,10],val=> val % 2 != 0) , false)
        })

        it('returns false with a function that checks if a number is odd given array with all even numbers except for one', () => {
            assert.equal( callBack([6,4,10,11],val=> val % 2 != 0) , true)
        })

        it('returns false with a function that checks if a number is odd given array with all even numbers except for one', () => {
            assert.equal( callBack([6,4,10,11],val=> val % 2 != 0) , true)
        })
    })

    describe('Simple callBack function: even', ()=>{

        it('returns true with a function that checks if a number is even in a single item array', () => {
            assert.equal( callBack([3],val=> val % 2 == 0) , false)
        })

        it('returns false with a function that checks if a number is even given array with all even numbers', () => {
            assert.equal( callBack([6,4,10],val=> val % 2 == 0) , true)
        })

        it('returns false with a function that checks if a number is even given array with all even numbers except for one', () => {
            assert.equal( callBack([6,4,10,11],val=> val % 2 == 0) , true)
        })

        it('returns false with a function that checks if a number is even given array with all even numbers except for one', () => {
            assert.equal( callBack([6,4,10,11],val=> val % 2 == 0) , true)
        })
    })

    describe('Simple callBack function: greater than', ()=>{

        it('returns true with a function that checks if a number is even in a single item array', () => {
            assert.equal( callBack([3,1,10,18,35,100,90],val=> val >= 100) , true)
        })

        it('returns false with a function that checks if a number is even given array with all even numbers', () => {
            assert.equal( callBack([6,4,10],val=> val >= 100) , false)
        })
    })

})