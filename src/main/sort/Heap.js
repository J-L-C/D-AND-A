function maxHeapify(arr, index) {
    const leftIndex = getLeftChild(index)
    const rightIndex = getRightChild(index)
    let largestIndex

    //left - 20 and problem index
    //right is 5 and fine
    if(leftIndex <= arr.length && arr[leftIndex] > arr[index]){
        largestIndex = leftIndex
    } else {
        largestIndex = index
    }

    if(rightIndex <= arr.length && arr[rightIndex] > arr[largestIndex]){
        largestIndex = rightIndex
    }

    if( largestIndex !== index){
        swap(index,largestIndex,arr)
        maxHeapify(arr,index)
    }

}

function getRightChild(index){
    return 2*index + 1
}

function getLeftChild(index){
    return 2*index
}

function getParent(index){
    return Math.floor(index/2)
}

function swap(index1,index2,arr){
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
}

module.exports = {maxHeapify}