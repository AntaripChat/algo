// [2,4,3,1] ----> [1,2,3,4]
// O(n^2)
function swap(arr,a,b){
    let tem = arr[a];
    arr[a] = arr[b];
    arr[b] = tem;
}

function bubblesort(arr,n){
    for(let i = 0; i < n-1;i++){
        for(let j = 0; j < n - i -1; j++){
            if(arr[j] > arr[j+1] ){
                swap(arr,j,j+1);
            }
        }
    }
}

let arr = [2,4,3,1];
let n = arr.length;
console.log(arr);
bubblesort(arr,n);
console.log(arr);