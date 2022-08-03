const {sort} = require('../../main/sort/Insertion')
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('Insertion Sort', () => {

    it('empty unsorted array returns empty sorted array', () => {
        const sortMe = []
        const expected = []
        assert.deepEqual( sort(sortMe), expected)
    })

    it('single element unsorted array returns single element sorted array', () => {
        const sortMe = [1]
        const expected = [1]
        assert.deepEqual( sort(sortMe), expected)
    })

    it('two elements unsorted array returns two elements sorted array', () => {
        const sortMe = [2,1]
        const expected = [1,2]
        assert.deepEqual( sort(sortMe), expected)
    })

    it('three elements unsorted array returns three elements sorted array', () => {
        const sortMe = [3,2,1]
        const expected = [1,2,3]
        assert.deepEqual( sort(sortMe), expected)
    })

    it('three elements unsorted array returns three elements sorted array', () => {
        const sortMe = [3,2,1,90,5,2,4,9,100,4,4,3,54,23]
        const expected = [1,2,2,3,3,4,4,4,5,9,23,54,90,100]
        assert.deepEqual( sort(sortMe), expected)
    })
})