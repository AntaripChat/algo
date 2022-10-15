//--------

function linearSearch(arr,n,key){
    let i;
    for(i = 0; i < n;i++){
        if(arr[i] === key){
            return i;
        }
    }
    return -1;
}

let arr = [2,5,7,1,8,4,9];
let n = arr.length;
let key = 9;
console.log(linearSearch(arr,n,key));


/// Time complexity -- O(n)
// space complexity -- O(1)