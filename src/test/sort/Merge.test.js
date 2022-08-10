const {sort,merge} = require('../../main/sort/Merge')
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('Merge Sort', () => {

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

    describe('Merge',()=>{
        it('should merge two single element arrays that are already in sorted order into a new array maintaining the sorted order',()=>{
            const mergeMe1 = [1]
            const mergeMe2 = [2]
            const expected = [1,2]
            assert.deepEqual(merge(mergeMe1,mergeMe2),expected)
        })

        it('should merge two double element arrays that are already in sorted order into a new array while maintaining the sorted order',()=>{
            const mergeMe1 = [1,2]
            const mergeMe2 = [3,4]
            const expected = [1,2,3,4]
            assert.deepEqual(merge(mergeMe1,mergeMe2),expected)
        })

        it('should merge two 3 element arrays with values that fall in between each other into a new array while maintaining the sorted order',()=>{
            const mergeMe1 = [1,3,5]
            const mergeMe2 = [2,4,6]
            const expected = [1,2,3,4,5,6]
            assert.deepEqual(merge(mergeMe1,mergeMe2),expected)
        })

        it('should merge two arrays with a slew of interesting numbers into a new array while maintaining the sorted order',()=>{
            const mergeMe1 = [1,3,5,10,11,100,101,105,900,1000]
            const mergeMe2 = [2,4,6,11,12,99,101,109,500,1001]
            const expected = [1,2,3,4,5,6,10,11,11,12,99,100,101,101,105,109,500,900,1000,1001]
            assert.deepEqual(merge(mergeMe1,mergeMe2),expected)
        })
    })


})