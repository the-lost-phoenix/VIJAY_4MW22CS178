let arr=[9,84,3,4,34,6,9,10,123]
let a=[]
function findMax(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    if(arr[0]==null){
        return null
    }else{
        return max
    }
}
let result=findMax(a)
console.log(result)