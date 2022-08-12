const {sort, pivot} = require('../../main/sort/Quick')
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('Quick Sort', () => {

    describe('Sort', ()=>{
        it('empty unsorted array returns empty sorted array', () => {
            const sortMe = []
            const expected = []
            assert.deepEqual( sort(sortMe), expected)
        })

        it('one element unsorted array returns one element sorted array', () => {
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

        it('14 elements unsorted array returns 14 elements sorted array', () => {
            const sortMe = [3,2,1,90,5,2,4,9,100,4,4,3,54,23]
            const expected = [1,2,2,3,3,4,4,4,5,9,23,54,90,100]
            assert.deepEqual( sort(sortMe), expected)
        })

        it('sorts a mostly sorted array', () => {
            const sortMe = [100,2,2,3,3,4,4,4,5,9,23,90,54,1]
            const expected = [1,2,2,3,3,4,4,4,5,9,23,54,90,100]
            assert.deepEqual( sort(sortMe), expected)
        })
    })

    describe('Pivot',()=>{
        it('should return the index of correct position for the number ie 3 given array [4,8,2,1,5,7,6,3]',()=>{
            let pivotMe = [4,8,2,1,5,7,6,3]
            let expected = 3

            assert.equal( pivot(pivotMe), expected)
        })
        it('should modify the array to have the pivot sorted in the correct position: [4,8,2,1,5,7,6,3] => [3,2,1,4,5,7,6,8]',()=>{
            let pivotMe = [4,8,2,1,5,7,6,3]
            let expected = [3,2,1,4,5,7,6,8]
            pivot(pivotMe)
            assert.deepEqual( pivotMe, expected)
        })
    })

})