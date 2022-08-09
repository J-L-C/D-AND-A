function sort(arr) {


    return arr;
}

function swap(index1,index2,arr){
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
}

module.exports = {sort}