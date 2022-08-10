function sort(arr) {

    //Loop from the end to the beginning. This is because as the array become more sorted,
    //we do not need to look at the right most element anymore.
    //The inner loop looks at the current element and compares it to the next element.
    //if the comparison is true, the current element is greater, we swap the elements.
    //Increment j and check the next element to see if that satisfies the conditional
    for(let i = arr.length; i >= 0; i--)
        for(let j = 0; j < i - 1; j++)
            if(arr[j] > arr[j+1])
                 swap(j,j+1,arr)

    return arr;
}

function swap(index1,index2,arr){
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
}

module.exports = {sort}