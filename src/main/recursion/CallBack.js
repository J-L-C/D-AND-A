function callBack(arr,fun){
   if(arr.length === 0) return false
   if(fun(arr[0])) return true
   return callBack(arr.slice(1,arr.length),fun)
}

module.exports = {callBack}