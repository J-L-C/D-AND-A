function sort(arr, left = 0, right = arr.length - 1) {

    if(arr.length === 0 || arr.length === 1)
        return arr
    if(left >= right)
        return
    let pivotIndex = pivot(arr,left,right)
    sort(arr,left,pivotIndex-1)
    sort(arr,pivotIndex+1,right)
    return arr
}

function pivot(arr, start=0, end=arr.length+1){
    let pivot = arr[start];
    let swapInd = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapInd++;
            swap(swapInd,i,arr)
        }
    }

    swap(start,swapInd,arr)
    return swapInd
}

function swap(index1,index2,arr){
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
}

module.exports = {sort,pivot}