function sort(arr) {

    if(arr.length === 0 || arr.length === 1)
        return arr;

    let smallest;

    for(let i = 0; i < arr.length; i++){
        smallest = i;
        for(let j = i; j < arr.length; j++)
        {
            if(arr[j] < arr[smallest])
                smallest = j;
            if(j === arr.length - 1  && i !== smallest)
                swap(smallest,i,arr)
        }
    }

    return arr;
}

function swap(index1,index2,arr){
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
}

module.exports = {sort}