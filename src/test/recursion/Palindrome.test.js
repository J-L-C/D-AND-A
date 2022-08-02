const {isPalindrome} = require('../../main/recursion/Palindrome');
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('Palindrome: recursion', () => {

    it('return false when given an empty word', () => {
        assert.equal(isPalindrome(''),false)
    })

    it('return true when given a single character word', () => {
        assert.equal(isPalindrome('a'),true)
    })

    it('returns true when given a word that is a palindrome',()=>{
        assert.equal(isPalindrome('abba'), true)
    })

    it('returns false when given a word is not a palindrome',()=>{
        assert.equal(isPalindrome('adba'), false)
    })

})