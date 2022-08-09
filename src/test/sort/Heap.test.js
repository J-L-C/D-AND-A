const {maxHeapify} = require('../../main/sort/Heap')
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('Heap functions', () => {

    describe('MAX-HEAPIFY', function () {
        it('should make a valid heap given a small heap of size 4: [null,10,20,5] and the index that potentially violates the max-heap property. 20 should be at the top of the heap', () => {
            const heapifyMe = [null,10,20,5]
            const expected = [null,20,10,5]
            maxHeapify(heapifyMe,1)
            assert.deepEqual( heapifyMe, expected)
        })
        it('should make a valid heap given a small heap of size 6: [null,10,1,5,35,20] and the index that potentially violates the max-heap property. 35 should be at the top of the heap and 20 as the parent of 10. Perform multiple heapifies if needed.', () => {
            //            10
            //          /    \
            //         1     5
            //       /   \  /   \
            //     35    20
            //
            const heapifyMe = [null,10,1,5,35,20]
            const expected = [null, 35, 20, 5, 1, 10]
            maxHeapify(heapifyMe,2)
            maxHeapify(heapifyMe,1)
            maxHeapify(heapifyMe,2)
            assert.deepEqual( heapifyMe, expected)
        })
    });

})