function sort(arr) {

    if(arr.length === 0 || arr.length === 1)
        return arr;

    return arr;
}

function merge(arr1,arr2){
    let result = []
    let leftPointer = 0;
    let rightPointer = 0;

    while(leftPointer < arr1.length || rightPointer < arr2.length ){

        if(arr1[leftPointer] <= arr2[rightPointer]){
            result.push(arr1[leftPointer])
            leftPointer++
            continue
        }

        if(arr1[leftPointer] > arr2[rightPointer]){
            result.push(arr2[rightPointer])
            //since we added a value from arr2 we increment rightPointer
            rightPointer++
            continue
        }

        if(leftPointer >= arr1.length){
            result.push(arr2[rightPointer])
            rightPointer++
            continue
        }

        if(rightPointer >= arr2.length){
            result.push(arr1[leftPointer])
            leftPointer++
            continue
        }

    }


    return result;
}


module.exports = {sort,merge}