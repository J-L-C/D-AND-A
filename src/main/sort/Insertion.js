function sort(arr){

    for(let i = 1; i < arr.length; i++){
        // let currentIndex
        for(let j = i; j >= 0; j-- ){
            if(arr[j - 1] > arr[j]){
                swap(j-1,j,arr)
            } else{
                break;
            }

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